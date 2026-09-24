import { Extension, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { TableKit } from "@tiptap/extension-table";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Youtube from "@tiptap/extension-youtube";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import ImageNodeView from "./ImageNodeView";
import HtmlBlockView from "./HtmlBlockView";
import { parseStyle } from "../../utils/blogHtml";
import { imageBoxCss, type ImageAlign, type ImageAttrs } from "./shared";

/* ------------------------------------------------------------------ */
/* Image                                                               */
/* ------------------------------------------------------------------ */

const cssString = (css: Record<string, string>) =>
  Object.entries(css)
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ") || null;

function readImage(el: HTMLElement): Partial<ImageAttrs> | false {
  const img = (el.tagName === "IMG" ? el : el.querySelector("img[src]")) as HTMLImageElement | null;
  if (!img) return false;
  const figure = el.tagName === "FIGURE" ? el : null;
  const box = figure || img;
  const style = Object.fromEntries(parseStyle(box.getAttribute("style")));

  let align = (box.getAttribute("data-align") || img.getAttribute("data-align")) as ImageAlign;
  if (!align) {
    if (style.float === "left" || style.float === "right") align = style.float;
    else if (/auto/.test(style["margin-left"] || "") && /auto/.test(style["margin-right"] || ""))
      align = "center";
    else if (/^\S+\s+auto/.test(style.margin || "")) align = "center";
  }

  let width: string | null = style.width || null;
  if (!width) {
    const attr = img.getAttribute("width");
    if (attr && /^\d+$/.test(attr)) width = `${attr}px`;
    else if (attr && /^\d+%$/.test(attr)) width = attr;
  }

  const link = img.closest("a");
  return {
    src: img.getAttribute("src") || "",
    alt: img.getAttribute("alt") || "",
    title: img.getAttribute("title"),
    width,
    align,
    href: link?.getAttribute("href") || null,
    newTab: link?.getAttribute("target") === "_blank",
    caption: figure?.querySelector("figcaption")?.textContent?.trim() || null,
    pending: img.hasAttribute("data-bw-pending"),
  };
}

// Attributes are parsed as a whole in readImage() and rendered in renderHTML().
const imageAttr = (fallback: unknown) => ({
  default: fallback,
  parseHTML: () => null,
  rendered: false,
});

export const BlogImage = Node.create({
  name: "image",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addStorage() {
    return {
      /** Set by the editor component; opens the image dialog for the node at `pos`. */
      onEdit: null as null | ((pos: number) => void),
    };
  },

  addAttributes() {
    return {
      src: imageAttr(""),
      alt: imageAttr(""),
      title: imageAttr(null),
      width: imageAttr(null),
      align: imageAttr(null),
      href: imageAttr(null),
      newTab: imageAttr(false),
      caption: imageAttr(null),
      pending: imageAttr(false),
    };
  },

  parseHTML() {
    return [
      { tag: "figure", priority: 60, getAttrs: (el) => readImage(el as HTMLElement) },
      { tag: "img[src]", getAttrs: (el) => readImage(el as HTMLElement) },
    ];
  },

  renderHTML({ node }) {
    const a = node.attrs as ImageAttrs;
    const box = imageBoxCss(a.width, a.align);
    const withCaption = !!a.caption;

    const img: [string, Record<string, string | null>] = [
      "img",
      {
        src: a.src,
        alt: a.alt || "",
        title: a.title || null,
        loading: "lazy",
        decoding: "async",
        "data-align": withCaption ? null : a.align,
        style: withCaption ? null : cssString(box),
      },
    ];

    const linked = a.href
      ? [
          "a",
          {
            href: a.href,
            target: a.newTab ? "_blank" : null,
            rel: a.newTab ? "noopener noreferrer" : null,
          },
          img,
        ]
      : img;

    if (!withCaption) return linked as never;

    return [
      "figure",
      { class: "bw-figure", "data-align": a.align, style: cssString(box) },
      linked,
      ["figcaption", {}, a.caption],
    ] as never;
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
});

/* ------------------------------------------------------------------ */
/* Raw HTML block                                                      */
/* ------------------------------------------------------------------ */

/**
 * Holds HTML the editor has no model for (custom <style>, accordions, forms,
 * CTA cards, embeds...). Stored as <div data-html-block>…</div> and rendered
 * as-is on the site.
 */
export const HtmlBlock = Node.create({
  name: "htmlBlock",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addStorage() {
    return { onEdit: null as null | ((pos: number) => void) };
  },

  addAttributes() {
    return {
      html: { default: "", parseHTML: () => null, rendered: false },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-html-block]",
        priority: 100,
        getAttrs: (el) => ({ html: (el as HTMLElement).innerHTML }),
      },
    ];
  },

  renderHTML({ node }) {
    // An inert document keeps images/scripts in the snippet from loading while serialising.
    const doc = document.implementation.createHTMLDocument("");
    const div = doc.createElement("div");
    div.setAttribute("data-html-block", "");
    div.innerHTML = node.attrs.html;
    return div as never;
  },

  addNodeView() {
    return ReactNodeViewRenderer(HtmlBlockView);
  },
});

/* ------------------------------------------------------------------ */
/* Keep classes / ids / table styles from existing posts               */
/* ------------------------------------------------------------------ */

const TABLE_TYPES = ["table", "tableRow", "tableCell", "tableHeader"];

/** Table styles handled by other attributes, don't duplicate them. */
const OWNED_TABLE_PROPS = new Set(["text-align", "background-color", "background", "width", "min-width"]);

export const PreservedAttributes = Extension.create({
  name: "preservedAttributes",

  addGlobalAttributes() {
    return [
      {
        types: ["paragraph", "heading", "blockquote", "bulletList", "orderedList", "listItem", ...TABLE_TYPES],
        attributes: {
          class: {
            default: null,
            parseHTML: (el) => el.getAttribute("class") || null,
            renderHTML: (attrs) => (attrs.class ? { class: attrs.class } : {}),
          },
        },
      },
      {
        // ids are used as anchors (table of contents links)
        types: ["heading", "paragraph"],
        attributes: {
          id: {
            default: null,
            parseHTML: (el) => el.getAttribute("id") || null,
            renderHTML: (attrs) => (attrs.id ? { id: attrs.id } : {}),
          },
        },
      },
      {
        types: TABLE_TYPES,
        attributes: {
          extraStyle: {
            default: null,
            parseHTML: (el) =>
              parseStyle(el.getAttribute("style"))
                .filter(([p]) => !OWNED_TABLE_PROPS.has(p))
                .map(([p, v]) => `${p}: ${v}`)
                .join("; ") || null,
            renderHTML: (attrs) => (attrs.extraStyle ? { style: attrs.extraStyle } : {}),
          },
        },
      },
      {
        types: ["tableCell", "tableHeader"],
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (el) => (el as HTMLElement).style.backgroundColor || null,
            renderHTML: (attrs) =>
              attrs.backgroundColor ? { style: `background-color: ${attrs.backgroundColor}` } : {},
          },
        },
      },
    ];
  },
});

/* ------------------------------------------------------------------ */

export function buildExtensions(placeholder: string) {
  return [
    StarterKit.configure({
      heading: { levels: [1, 2, 3, 4, 5, 6] },
      link: {
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        defaultProtocol: "https",
        // keep target/rel exactly as authored instead of forcing defaults
        HTMLAttributes: { target: null, rel: null },
      },
      dropcursor: { color: "#54acbf", width: 3 },
    }),
    TextStyleKit,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
      alignments: ["left", "center", "right", "justify"],
    }),
    TableKit.configure({
      table: { resizable: true, allowTableNodeSelection: true },
    }),
    Subscript,
    Superscript,
    Youtube.configure({ nocookie: true, width: 640, height: 360 }),
    CharacterCount,
    Placeholder.configure({ placeholder }),
    BlogImage,
    HtmlBlock,
    PreservedAttributes,
  ];
}
