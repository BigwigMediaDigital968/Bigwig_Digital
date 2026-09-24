/**
 * HTML pipeline for blog content.
 *
 * The public blog renders on a dark navy background (--color1: #011c40) with
 * white text. Content pasted from Google Docs, Word or other websites carries
 * inline styles written for white pages ("color: #000", "background: #fff",
 * fonts, sizes...) which become invisible or ugly on the site. Legacy posts
 * were also written with Quill and contain Quill-only markup, full HTML
 * documents with <style> tags, accordions, etc.
 *
 *  - cleanPastedHtml()      → runs on paste inside the editor
 *  - prepareHtmlForEditor() → runs when loading HTML into the editor
 *  - normalizeBlogHtml()    → runs on the public page before rendering (safety net
 *                             for old posts; never changes what is stored)
 *
 * All functions need a DOM (DOMParser) and return the input unchanged on the server.
 */

export type PasteMode = "clean" | "keep" | "plain";

/* ------------------------------------------------------------------ */
/* Colours                                                             */
/* ------------------------------------------------------------------ */

type RGBA = [number, number, number, number];

/** Site background the content is rendered on. */
export const SITE_BG: RGBA = [1, 28, 64, 1];
const WHITE: RGBA = [255, 255, 255, 1];
/** Text colour we force on light backgrounds (tables/boxes pasted with white cells). */
export const DARK_TEXT = "#0f172a";

const NAMED_COLORS: Record<string, string> = {
  black: "#000000",
  windowtext: "#000000",
  white: "#ffffff",
  window: "#ffffff",
  red: "#ff0000",
  green: "#008000",
  blue: "#0000ff",
  navy: "#000080",
  gray: "#808080",
  grey: "#808080",
  silver: "#c0c0c0",
  maroon: "#800000",
  purple: "#800080",
  yellow: "#ffff00",
  orange: "#ffa500",
  whitesmoke: "#f5f5f5",
  gainsboro: "#dcdcdc",
  lightgray: "#d3d3d3",
  lightgrey: "#d3d3d3",
  darkgray: "#a9a9a9",
  darkgrey: "#a9a9a9",
  dimgray: "#696969",
  dimgrey: "#696969",
  darkblue: "#00008b",
  darkgreen: "#006400",
  darkred: "#8b0000",
};

/** Parses hex / rgb() / rgba() / a few named colours. Returns null for anything else (var(), gradients...). */
export function parseColor(input: string | null | undefined): RGBA | null {
  if (!input) return null;
  let value = input.trim().toLowerCase().replace(/\s*!important$/, "");
  if (value === "transparent") return [0, 0, 0, 0];
  if (NAMED_COLORS[value]) value = NAMED_COLORS[value];

  if (value.startsWith("#")) {
    let hex = value.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    if (hex.length !== 6 && hex.length !== 8) return null;
    const n = (i: number) => parseInt(hex.slice(i, i + 2), 16);
    const rgba: RGBA = [n(0), n(2), n(4), hex.length === 8 ? n(6) / 255 : 1];
    return rgba.some((v) => Number.isNaN(v)) ? null : rgba;
  }

  const m = value.match(/^rgba?\(([^)]+)\)$/);
  if (m) {
    const parts = m[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length < 3) return null;
    const channel = (p: string) =>
      p.endsWith("%") ? (parseFloat(p) / 100) * 255 : parseFloat(p);
    const alpha =
      parts[3] === undefined
        ? 1
        : parts[3].endsWith("%")
          ? parseFloat(parts[3]) / 100
          : parseFloat(parts[3]);
    const rgba: RGBA = [
      channel(parts[0]),
      channel(parts[1]),
      channel(parts[2]),
      alpha,
    ];
    return rgba.some((v) => Number.isNaN(v)) ? null : rgba;
  }
  return null;
}

export function luminance([r, g, b]: RGBA): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrastRatio(a: RGBA, b: RGBA): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Blend a translucent colour over a background so contrast maths stay honest. */
function flatten(color: RGBA, over: RGBA): RGBA {
  const a = color[3];
  return [
    color[0] * a + over[0] * (1 - a),
    color[1] * a + over[1] * (1 - a),
    color[2] * a + over[2] * (1 - a),
    1,
  ];
}

/** True when a colour is hard to read as text on the site's dark background. */
export function isLowContrastOnSite(color: string): boolean {
  const c = parseColor(color);
  if (!c) return false;
  return contrastRatio(flatten(c, SITE_BG), SITE_BG) < 3;
}

/* ------------------------------------------------------------------ */
/* Inline style helpers                                                */
/* ------------------------------------------------------------------ */

type Decl = [prop: string, value: string];

/** Splits a style attribute on ";" while respecting parentheses (url(data:...;base64)). */
export function parseStyle(style: string | null): Decl[] {
  if (!style) return [];
  const decls: Decl[] = [];
  let depth = 0;
  let current = "";
  const push = () => {
    const idx = current.indexOf(":");
    if (idx > 0) {
      const prop = current.slice(0, idx).trim().toLowerCase();
      const value = current.slice(idx + 1).trim();
      if (prop && value) decls.push([prop, value]);
    }
    current = "";
  };
  for (const ch of style) {
    if (ch === "(") depth++;
    if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === ";" && depth === 0) push();
    else current += ch;
  }
  push();
  return decls;
}

function writeStyle(el: Element, decls: Decl[]) {
  if (decls.length) {
    el.setAttribute("style", decls.map(([p, v]) => `${p}: ${v}`).join("; "));
  } else {
    el.removeAttribute("style");
  }
}

const INLINE_TAGS = new Set([
  "SPAN",
  "A",
  "B",
  "STRONG",
  "I",
  "EM",
  "U",
  "S",
  "STRIKE",
  "DEL",
  "SUB",
  "SUP",
  "CODE",
  "MARK",
  "FONT",
  "SMALL",
  "BIG",
  "LABEL",
  "ABBR",
]);

interface ThemeOptions {
  /** Drop white-ish backgrounds on inline elements (Google Docs puts them on every span). */
  stripInlineLightBg: boolean;
  /** Drop light backgrounds everywhere (clean paste) instead of keeping them with dark text. */
  dropLightBg: boolean;
  /** Skip elements styled by custom CSS classes (their colours come from a stylesheet). */
  skipCustomClassed: boolean;
}

function hasCustomClass(el: Element): boolean {
  const cls = el.getAttribute("class");
  if (!cls) return false;
  return cls
    .split(/\s+/)
    .some((c) => c && !c.startsWith("ql-") && !c.startsWith("bw-"));
}

/**
 * Walks the tree tracking whether the current background is light or dark and
 * removes text colours / backgrounds that would clash with it.
 */
function applyThemeFix(el: Element, onLight: boolean, opts: ThemeOptions) {
  if (el.hasAttribute("data-html-block")) return;
  if (opts.skipCustomClassed && hasCustomClass(el)) return;
  const tag = el.tagName.toUpperCase();
  if (tag === "STYLE" || tag === "SCRIPT" || tag === "SVG" || tag === "MARK")
    return;

  let light = onLight;
  const decls = parseStyle(el.getAttribute("style"));

  if (decls.length) {
    const out: Decl[] = [];
    let ownLightBg = false;

    for (const [prop, value] of decls) {
      if (prop === "background-color" || prop === "background") {
        // `background` shorthand with images/gradients: keep, can't reason about it.
        const c = parseColor(value);
        if (!c) {
          out.push([prop, value]);
          continue;
        }
        if (c[3] === 0) continue; // transparent → noise
        const flat = flatten(c, light ? WHITE : SITE_BG);
        const isLight = luminance(flat) > 0.45;
        if (isLight) {
          if (opts.dropLightBg) continue;
          if (opts.stripInlineLightBg && INLINE_TAGS.has(tag)) continue;
          ownLightBg = true;
          light = true;
        } else {
          light = false;
        }
        out.push([prop, value]);
      } else {
        out.push([prop, value]);
      }
    }

    const bgNow: RGBA = light ? WHITE : SITE_BG;
    const final: Decl[] = [];
    let hasColor = false;
    for (const [prop, value] of out) {
      if (prop === "color") {
        const c = parseColor(value);
        if (c && contrastRatio(flatten(c, bgNow), bgNow) < 3) continue;
        hasColor = true;
      }
      final.push([prop, value]);
    }
    if (ownLightBg && !hasColor) final.push(["color", DARK_TEXT]);
    writeStyle(el, final);
  }

  for (const child of Array.from(el.children)) applyThemeFix(child, light, opts);
}

/* ------------------------------------------------------------------ */
/* Shared DOM helpers                                                  */
/* ------------------------------------------------------------------ */

const hasDom = () =>
  typeof window !== "undefined" && typeof DOMParser !== "undefined";

function parse(html: string): Document {
  return new DOMParser().parseFromString(html || "", "text/html");
}

function unwrap(el: Element) {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}

function removeComments(root: Node) {
  const doc = root.ownerDocument || (root as Document);
  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
  const comments: Node[] = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  comments.forEach((c) => c.parentNode?.removeChild(c));
}

const BLOCK_TAGS = new Set([
  "P",
  "DIV",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "UL",
  "OL",
  "LI",
  "TABLE",
  "BLOCKQUOTE",
  "PRE",
  "HR",
  "FIGURE",
  "SECTION",
  "ARTICLE",
  "HEADER",
  "FOOTER",
  "ASIDE",
  "NAV",
  "MAIN",
  "IMG",
  "IFRAME",
]);

function isCloudinary(src: string) {
  return /^https?:\/\/res\.cloudinary\.com\//i.test(src);
}

/* ------------------------------------------------------------------ */
/* Quill → standard HTML (legacy posts)                                */
/* ------------------------------------------------------------------ */

const QUILL_SIZES: Record<string, string> = {
  "ql-size-small": "0.75em",
  "ql-size-large": "1.5em",
  "ql-size-huge": "2.5em",
};
const QUILL_FONTS: Record<string, string> = {
  "ql-font-serif": "Georgia, 'Times New Roman', serif",
  "ql-font-monospace": "Monaco, 'Courier New', monospace",
};

/** Quill 2 stores every list as <ol> with <li data-list="bullet|ordered"> and ql-indent-N classes. */
function rebuildQuillList(list: Element) {
  const doc = list.ownerDocument;
  const items = Array.from(list.children).filter((c) => c.tagName === "LI");
  const frag = doc.createDocumentFragment();
  const stack: { el: Element; tag: string; indent: number }[] = [];

  for (const li of items) {
    const type = li.getAttribute("data-list") || "ordered";
    const tag = type === "ordered" ? "ol" : "ul";
    const indent = Number(
      (li.getAttribute("class") || "").match(/ql-indent-(\d+)/)?.[1] || 0,
    );

    const newLi = doc.createElement("li");
    while (li.firstChild) newLi.appendChild(li.firstChild);

    while (
      stack.length &&
      (stack[stack.length - 1].indent > indent ||
        (stack[stack.length - 1].indent === indent &&
          stack[stack.length - 1].tag !== tag))
    ) {
      stack.pop();
    }

    if (!stack.length || stack[stack.length - 1].indent < indent) {
      const newList = doc.createElement(tag);
      if (stack.length) {
        const parentList = stack[stack.length - 1].el;
        let lastLi = parentList.lastElementChild;
        if (!lastLi) {
          lastLi = doc.createElement("li");
          parentList.appendChild(lastLi);
        }
        lastLi.appendChild(newList);
      } else {
        frag.appendChild(newList);
      }
      stack.push({ el: newList, tag, indent });
    }
    stack[stack.length - 1].el.appendChild(newLi);
  }

  list.replaceWith(frag);
}

function migrateQuill(root: Element) {
  root
    .querySelectorAll("span.ql-ui, span.ql-cursor")
    .forEach((el) => el.remove());
  root
    .querySelectorAll("[contenteditable]")
    .forEach((el) => el.removeAttribute("contenteditable"));

  // Lists: process innermost-first isn't needed, Quill lists are flat.
  root.querySelectorAll("ol, ul").forEach((list) => {
    if (list.querySelector(":scope > li[data-list]")) rebuildQuillList(list);
  });

  root.querySelectorAll("[class*='ql-']").forEach((el) => {
    const classes = (el.getAttribute("class") || "").split(/\s+/);
    const keep: string[] = [];
    const decls = parseStyle(el.getAttribute("style"));
    for (const c of classes) {
      const align = c.match(/^ql-align-(center|right|justify)$/);
      if (align) decls.push(["text-align", align[1]]);
      else if (QUILL_SIZES[c]) decls.push(["font-size", QUILL_SIZES[c]]);
      else if (QUILL_FONTS[c]) decls.push(["font-family", QUILL_FONTS[c]]);
      else if (c === "ql-syntax") {
        /* handled below */
      } else if (c) keep.push(c);
    }
    writeStyle(el, decls);
    if (keep.length) el.setAttribute("class", keep.join(" "));
    else el.removeAttribute("class");
  });

  root.querySelectorAll("pre").forEach((pre) => {
    if (!pre.querySelector("code")) {
      const code = pre.ownerDocument.createElement("code");
      while (pre.firstChild) code.appendChild(pre.firstChild);
      pre.appendChild(code);
    }
  });

  root
    .querySelectorAll("[data-row]")
    .forEach((el) => el.removeAttribute("data-row"));

  // <p style="text-align:center"><img></p> → centred image
  root.querySelectorAll("p").forEach((p) => {
    const imgs = p.querySelectorAll("img");
    if (imgs.length !== 1 || (p.textContent || "").trim()) return;
    const align = parseStyle(p.getAttribute("style")).find(
      ([k]) => k === "text-align",
    )?.[1];
    if (
      (align === "center" || align === "right") &&
      !imgs[0].hasAttribute("data-align")
    ) {
      imgs[0].setAttribute("data-align", align);
    }
  });
}

/* ------------------------------------------------------------------ */
/* Scoping <style> tags written inside posts                           */
/* ------------------------------------------------------------------ */

function splitSelectors(selector: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of selector) {
    if (ch === "(" || ch === "[") depth++;
    if (ch === ")" || ch === "]") depth--;
    if (ch === "," && depth === 0) {
      parts.push(cur);
      cur = "";
    } else cur += ch;
  }
  parts.push(cur);
  return parts.map((s) => s.trim()).filter(Boolean);
}

function scopeSelector(sel: string, scope: string): string {
  const replaced = sel.replace(/^(?:(?:html|body|:root)(?![\w-])\s*)+/i, "");
  if (replaced !== sel) return replaced ? `${scope} ${replaced}` : scope;
  return `${scope} ${sel}`;
}

/**
 * Prefixes every rule so CSS written inside a post only affects that post.
 * `body`, `html` and `:root` map to the scope itself. @media/@supports are
 * recursed into; @keyframes, @font-face etc. are left alone.
 */
export function scopeCss(css: string, scope: string): string {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  let out = "";
  let i = 0;

  while (i < src.length) {
    const open = src.indexOf("{", i);
    if (open === -1) {
      out += src.slice(i);
      break;
    }
    const head = src.slice(i, open).trim();

    // find the matching close brace
    let depth = 1;
    let j = open + 1;
    while (j < src.length && depth > 0) {
      if (src[j] === "{") depth++;
      else if (src[j] === "}") depth--;
      j++;
    }
    const body = src.slice(open + 1, j - 1);

    // statements such as @import/@charset that precede this block
    const lastSemi = head.lastIndexOf(";");
    const prefix = lastSemi >= 0 ? head.slice(0, lastSemi + 1) + "\n" : "";
    const selector = lastSemi >= 0 ? head.slice(lastSemi + 1).trim() : head;

    if (/^@(media|supports|container|layer)\b/i.test(selector)) {
      out += `${prefix}${selector}{${scopeCss(body, scope)}}\n`;
    } else if (selector.startsWith("@")) {
      out += `${prefix}${selector}{${body}}\n`;
    } else {
      const scoped = splitSelectors(selector)
        .map((s) => scopeSelector(s, scope))
        .join(", ");
      out += `${prefix}${scoped}{${body}}\n`;
    }
    i = j;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Paste                                                               */
/* ------------------------------------------------------------------ */

const PASTE_REMOVE =
  "script, style, meta, link, title, noscript, template, iframe, object, embed, form, input, button, select, textarea, svg, canvas, video, audio, xml";

const CLEAN_PROPS = new Set([
  "color",
  "background-color",
  "text-align",
  "font-weight",
  "font-style",
  "text-decoration",
  "text-decoration-line",
]);
const KEEP_PROPS = new Set([
  ...CLEAN_PROPS,
  "font-size",
  "font-family",
  "line-height",
  "background",
]);

const PASTE_ATTRS: Record<string, string[]> = {
  A: ["href", "title", "target", "rel"],
  IMG: ["src", "alt", "title"],
  TD: ["colspan", "rowspan"],
  TH: ["colspan", "rowspan"],
  OL: ["start"],
};

function convertPt(value: string) {
  const m = value.match(/^([\d.]+)pt$/);
  return m ? `${Math.round(parseFloat(m[1]) * 1.333)}px` : value;
}

/** Word pastes lists as <p class="MsoListParagraph..."> with a fake bullet in a mso-list:Ignore span. */
function convertWordLists(body: HTMLElement) {
  const doc = body.ownerDocument;
  const isListPara = (el: Element | null): el is HTMLElement =>
    !!el &&
    el.tagName === "P" &&
    (/MsoListParagraph/i.test(el.getAttribute("class") || "") ||
      /mso-list:\s*l\d/i.test(el.getAttribute("style") || ""));

  const paras = Array.from(body.querySelectorAll("p")).filter(isListPara);
  const handled = new Set<Element>();

  for (const p of paras) {
    if (handled.has(p)) continue;
    const group: HTMLElement[] = [];
    let cur: Element | null = p;
    while (isListPara(cur)) {
      group.push(cur);
      handled.add(cur);
      cur = cur.nextElementSibling;
    }
    const marker = (
      group[0].querySelector("[style*='mso-list']")?.textContent || ""
    ).trim();
    const list = doc.createElement(/^[\dA-Za-z]{1,3}[.)]$/.test(marker) ? "ol" : "ul");
    group[0].before(list);
    for (const item of group) {
      item
        .querySelectorAll("[style*='mso-list:Ignore'], [style*='mso-list: Ignore']")
        .forEach((s) => s.remove());
      const li = doc.createElement("li");
      while (item.firstChild) li.appendChild(item.firstChild);
      list.appendChild(li);
      item.remove();
    }
  }
}

export interface PasteResult {
  html: string;
  /** Images that couldn't be pasted (local file:// paths from Word). */
  droppedImages: number;
}

export function cleanPastedHtml(html: string, mode: PasteMode): PasteResult {
  if (!hasDom()) return { html, droppedImages: 0 };
  const doc = parse(html);
  const body = doc.body;
  let droppedImages = 0;

  removeComments(body);
  body.querySelectorAll(PASTE_REMOVE).forEach((el) => el.remove());
  // Word's <o:p> tags
  Array.from(body.getElementsByTagName("*"))
    .filter((el) => el.tagName.includes(":"))
    .forEach((el) => unwrap(el));

  // Google Docs wraps everything in <b style="font-weight:normal" id="docs-internal-guid-...">
  body
    .querySelectorAll("b[id^='docs-internal-guid'], google-sheets-html-origin")
    .forEach((el) => unwrap(el));

  convertWordLists(body);

  // <font color> → <span style="color">
  body.querySelectorAll("font").forEach((font) => {
    const span = doc.createElement("span");
    const color = font.getAttribute("color");
    if (color) span.setAttribute("style", `color: ${color}`);
    while (font.firstChild) span.appendChild(font.firstChild);
    font.replaceWith(span);
  });

  const allowedProps = mode === "keep" ? KEEP_PROPS : CLEAN_PROPS;

  for (const el of Array.from(body.querySelectorAll("*"))) {
    const tag = el.tagName.toUpperCase();

    // styles
    const decls = parseStyle(el.getAttribute("style"))
      .filter(([p, v]) => allowedProps.has(p) && !/^(inherit|initial|unset)$/i.test(v))
      .map(([p, v]): Decl => [p, p === "font-size" ? convertPt(v) : v])
      .filter(([p, v]) => !(p === "font-weight" && /^(normal|400)$/.test(v)))
      .filter(([p, v]) => !(p === "text-align" && /^(left|start)$/.test(v)));

    // vertical-align: super/sub → real tags (Docs uses spans for these)
    const va = parseStyle(el.getAttribute("style")).find(
      ([p]) => p === "vertical-align",
    )?.[1];
    if (va === "super" || va === "sub") {
      const wrap = doc.createElement(va === "super" ? "sup" : "sub");
      while (el.firstChild) wrap.appendChild(el.firstChild);
      el.appendChild(wrap);
    }

    // attributes
    const keepAttrs = PASTE_ATTRS[tag] || [];
    for (const attr of Array.from(el.attributes)) {
      if (attr.name !== "style" && !keepAttrs.includes(attr.name)) {
        el.removeAttribute(attr.name);
      }
    }
    writeStyle(el, decls);

    if (tag === "A") {
      const href = el.getAttribute("href") || "";
      if (/^\s*javascript:/i.test(href)) el.removeAttribute("href");
    }

    if (tag === "IMG") {
      const src = el.getAttribute("src") || "";
      if (!src || /^(file|blob|webkit-fake-url):/i.test(src)) {
        droppedImages++;
        el.remove();
        continue;
      }
      el.removeAttribute("style");
      if (!isCloudinary(src)) el.setAttribute("data-bw-pending", "1");
    }
  }

  // Layout containers: a div with only inline content becomes a paragraph,
  // otherwise it's unwrapped. Deepest first.
  const containers = Array.from(
    body.querySelectorAll("div, section, article, header, footer, main, aside, nav"),
  ).reverse();
  for (const el of containers) {
    const hasBlockChild = Array.from(el.children).some((c) =>
      BLOCK_TAGS.has(c.tagName),
    );
    if (!hasBlockChild && (el.textContent || "").trim()) {
      const p = doc.createElement("p");
      const style = el.getAttribute("style");
      if (style) p.setAttribute("style", style);
      while (el.firstChild) p.appendChild(el.firstChild);
      el.replaceWith(p);
    } else {
      unwrap(el);
    }
  }

  // Headings are already bold; Docs marks every heading run as font-weight:700.
  body.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
    h.querySelectorAll("[style]").forEach((el) =>
      writeStyle(el, parseStyle(el.getAttribute("style")).filter(([p]) => p !== "font-weight")),
    );
    h.querySelectorAll("b, strong").forEach((el) => unwrap(el));
  });

  // Attribute-less spans are just noise.
  body.querySelectorAll("span").forEach((span) => {
    if (!span.attributes.length) unwrap(span);
  });

  applyThemeFix(body, false, {
    stripInlineLightBg: true,
    dropLightBg: mode === "clean",
    skipCustomClassed: false,
  });

  return { html: body.innerHTML, droppedImages };
}

/* ------------------------------------------------------------------ */
/* Loading content into the editor                                      */
/* ------------------------------------------------------------------ */

const UNSUPPORTED_TAGS = new Set([
  "STYLE",
  "SCRIPT",
  "NOSCRIPT",
  "TEMPLATE",
  "LINK",
  "DETAILS",
  "SUMMARY",
  "INPUT",
  "LABEL",
  "SELECT",
  "TEXTAREA",
  "BUTTON",
  "FORM",
  "FIELDSET",
  "SVG",
  "CANVAS",
  "VIDEO",
  "AUDIO",
  "OBJECT",
  "EMBED",
  "PICTURE",
  "SECTION",
  "ARTICLE",
  "ASIDE",
  "NAV",
  "HEADER",
  "FOOTER",
  "MAIN",
  "DL",
  "CAPTION",
  "PROGRESS",
  "METER",
]);

/** Elements whose class attribute the editor keeps (see PreservedAttributes extension). */
const CLASS_PRESERVING_TAGS = new Set([
  "TABLE",
  "TR",
  "TD",
  "TH",
  "P",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "BLOCKQUOTE",
  "UL",
  "OL",
  "LI",
  "A",
  "TBODY",
  "THEAD",
]);

function isUnsupported(el: Element): boolean {
  const tag = el.tagName.toUpperCase();
  if (UNSUPPORTED_TAGS.has(tag)) return true;
  if (tag === "IFRAME") return !el.closest("div[data-youtube-video]");
  if (
    el.hasAttribute("data-open-popup") ||
    Array.from(el.attributes).some((a) => a.name.startsWith("on"))
  )
    return true;
  if (hasCustomClass(el) && !CLASS_PRESERVING_TAGS.has(tag)) return true;
  if (tag === "DIV" && el.hasAttribute("data-youtube-video")) return false;
  if (tag === "DIV" && (el.hasAttribute("style") || el.hasAttribute("id")))
    return true;
  return false;
}

function needsHtmlBlock(el: Element): boolean {
  if (el.hasAttribute("data-html-block")) return false;
  if (isUnsupported(el)) return true;
  return Array.from(el.querySelectorAll("*")).some(isUnsupported);
}

/**
 * Converts stored HTML into something the editor can represent without losing
 * anything: Quill markup is migrated, and blocks the editor has no model for
 * (custom <style>, accordions, forms, svgs, custom-class layouts...) are wrapped
 * in <div data-html-block> which the editor shows as an editable raw-HTML block.
 */
export function prepareHtmlForEditor(html: string): string {
  if (!hasDom() || !html) return html || "";
  const doc = parse(html);
  const body = doc.body;

  // <style>/<link> that ended up in <head> (post started with a <style>)
  const headAssets = Array.from(
    doc.head.querySelectorAll("style, link[rel='stylesheet']"),
  );
  body.querySelectorAll("meta, title").forEach((el) => el.remove());

  migrateQuill(body);

  // `background-color: transparent` on every span (Docs → Quill) is pure noise.
  body.querySelectorAll("[style*='transparent']").forEach((el) => {
    const decls = parseStyle(el.getAttribute("style"));
    const kept = decls.filter(([p, v]) => !(/^background(-color)?$/.test(p) && v.trim() === "transparent"));
    if (kept.length !== decls.length) writeStyle(el, kept);
  });

  for (const child of Array.from(body.children)) {
    if (!needsHtmlBlock(child)) continue;
    const wrapper = doc.createElement("div");
    wrapper.setAttribute("data-html-block", "");
    child.replaceWith(wrapper);
    wrapper.appendChild(child);
  }

  // Merge consecutive raw blocks so e.g. a <style> + its markup stay together.
  for (const block of Array.from(body.querySelectorAll(":scope > div[data-html-block]"))) {
    const prev = block.previousElementSibling;
    if (prev?.matches("div[data-html-block]") && prev.firstElementChild?.tagName === "STYLE" && prev.children.length === 1) {
      while (block.firstChild) prev.appendChild(block.firstChild);
      block.remove();
    }
  }

  if (headAssets.length) {
    const wrapper = doc.createElement("div");
    wrapper.setAttribute("data-html-block", "");
    headAssets.forEach((a) => wrapper.appendChild(a));
    body.prepend(wrapper);
  }

  return body.innerHTML;
}

/* ------------------------------------------------------------------ */
/* Public rendering                                                     */
/* ------------------------------------------------------------------ */

/**
 * Makes stored HTML safe to show on the dark site without modifying the DB:
 *  - migrates legacy Quill markup (bullet lists stored as <ol>, alignment classes)
 *  - scopes <style> tags so they can't restyle the whole page
 *  - removes text colours / backgrounds that are unreadable on the navy theme
 *  - wraps tables for horizontal scrolling on mobile, lazy-loads images
 */
export function normalizeBlogHtml(html: string, scope = ".blog-content"): string {
  if (!hasDom() || !html) return html || "";
  const doc = parse(html);
  const body = doc.body;

  const headStyles = Array.from(doc.head.querySelectorAll("style"));
  headStyles.reverse().forEach((s) => body.prepend(s));
  body.querySelectorAll("meta, title, link").forEach((el) => el.remove());

  migrateQuill(body);

  body.querySelectorAll("style").forEach((style) => {
    style.textContent = scopeCss(style.textContent || "", scope);
  });

  applyThemeFix(body, false, {
    stripInlineLightBg: true,
    dropLightBg: false,
    skipCustomClassed: true,
  });

  body.querySelectorAll("table").forEach((table) => {
    if (table.closest("[data-html-block]")) return;
    if (table.parentElement?.classList.contains("bw-table-wrap")) return;
    let el: Element | null = table.parentElement;
    while (el && el !== body) {
      if (hasCustomClass(el)) return; // custom layouts handle their own tables
      el = el.parentElement;
    }
    const wrap = doc.createElement("div");
    wrap.className = "bw-table-wrap";
    table.replaceWith(wrap);
    wrap.appendChild(table);
  });

  body.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
  });

  body.querySelectorAll("a[target='_blank']").forEach((a) => {
    const rel = new Set((a.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    a.setAttribute("rel", Array.from(rel).join(" "));
  });

  return body.innerHTML;
}

/* ------------------------------------------------------------------ */
/* Misc                                                                 */
/* ------------------------------------------------------------------ */

/** "how-seo_works-2.png" → "How seo works 2" */
export function altFromFilename(name: string): string {
  const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").trim();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : "";
}
