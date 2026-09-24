"use client";

import { useState } from "react";
import { useEditorState, type Editor } from "@tiptap/react";
import {
  Baseline,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bold,
  ClipboardPaste,
  Code,
  CodeXml,
  FileCode2,
  Highlighter,
  ImagePlus,
  Italic,
  Link,
  List,
  ListIndentDecrease,
  ListIndentIncrease,
  ListOrdered,
  Maximize2,
  Minimize2,
  Minus,
  PaintBucket,
  PanelLeft,
  PanelTop,
  Quote,
  Redo2,
  RemoveFormatting,
  SquareCode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellsMerge,
  TableCellsSplit,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Trash2,
  Underline,
  Undo2,
  Youtube,
} from "lucide-react";
import {
  CELL_COLORS,
  ColorPalette,
  Divider,
  Dropdown,
  HIGHLIGHT_COLORS,
  MenuItem,
  TEXT_COLORS,
  ToolButton,
} from "./ui";
import type { PasteMode } from "../../utils/blogHtml";

const ICON = 16;

const BLOCK_TYPES = [
  { label: "Paragraph", level: 0, className: "text-sm" },
  { label: "Heading 1", level: 1, className: "text-2xl font-bold" },
  { label: "Heading 2", level: 2, className: "text-xl font-bold" },
  { label: "Heading 3", level: 3, className: "text-lg font-semibold" },
  { label: "Heading 4", level: 4, className: "text-base font-semibold" },
  { label: "Heading 5", level: 5, className: "text-sm font-semibold" },
  { label: "Heading 6", level: 6, className: "text-xs font-semibold uppercase" },
] as const;

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px", "36px", "42px", "48px"];

const FONT_FAMILIES = [
  { label: "Default", value: "" },
  { label: "Sans serif", value: "Arial, Helvetica, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Monospace", value: "'Courier New', Courier, monospace" },
  { label: "Trebuchet", value: "'Trebuchet MS', sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
];

const PASTE_MODES: { value: PasteMode; label: string; hint: string }[] = [
  { value: "clean", label: "Clean (recommended)", hint: "Keeps headings, lists, links, tables, bold/italic. Removes fonts & colours that clash with the dark site." },
  { value: "keep", label: "Keep formatting", hint: "Also keeps font sizes & families. Unreadable colours are still fixed." },
  { value: "plain", label: "Plain text", hint: "Text only. Tip: Ctrl+Shift+V always pastes plain text." },
];

export interface ToolbarActions {
  openLink: () => void;
  openImage: () => void;
  openYoutube: () => void;
  insertHtml: () => void;
  toggleSource: () => void;
  toggleFullscreen: () => void;
  setPasteMode: (m: PasteMode) => void;
}

export default function Toolbar({
  editor,
  actions,
  pasteMode,
  sourceMode,
  fullscreen,
}: {
  editor: Editor;
  actions: ToolbarActions;
  pasteMode: PasteMode;
  sourceMode: boolean;
  fullscreen: boolean;
}) {
  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => {
      const textStyle = e.getAttributes("textStyle");
      let level = 0;
      for (let l = 1; l <= 6; l++) if (e.isActive("heading", { level: l })) level = l;
      return {
        level,
        bold: e.isActive("bold"),
        italic: e.isActive("italic"),
        underline: e.isActive("underline"),
        strike: e.isActive("strike"),
        sub: e.isActive("subscript"),
        sup: e.isActive("superscript"),
        code: e.isActive("code"),
        link: e.isActive("link"),
        bullet: e.isActive("bulletList"),
        ordered: e.isActive("orderedList"),
        quote: e.isActive("blockquote"),
        codeBlock: e.isActive("codeBlock"),
        align: ((["center", "right", "justify"] as const).find((a) => e.isActive({ textAlign: a })) || "left") as
          | "left"
          | "center"
          | "right"
          | "justify",
        color: (textStyle.color as string) || null,
        fontSize: (textStyle.fontSize as string) || null,
        fontFamily: (textStyle.fontFamily as string) || null,
        highlight: (e.getAttributes("highlight").color as string) || null,
        inTable: e.isActive("table"),
        inList: e.isActive("listItem"),
        canUndo: e.can().undo(),
        canRedo: e.can().redo(),
        canMerge: e.can().mergeCells(),
        canSplit: e.can().splitCell(),
        cellBg: (e.getAttributes("tableCell").backgroundColor || e.getAttributes("tableHeader").backgroundColor || null) as string | null,
      };
    },
  });

  const chain = () => editor.chain().focus();
  const disabled = sourceMode;
  const blockLabel = BLOCK_TYPES.find((b) => b.level === s.level)?.label || "Paragraph";
  const AlignIcon = { left: TextAlignStart, center: TextAlignCenter, right: TextAlignEnd, justify: TextAlignJustify }[s.align];

  return (
    <div className="bw-toolbar-wrap">
      <div className={`bw-toolbar ${disabled ? "is-disabled" : ""}`}>
        <ToolButton label="Undo (Ctrl+Z)" icon={<Undo2 size={ICON} />} disabled={disabled || !s.canUndo} onClick={() => chain().undo().run()} />
        <ToolButton label="Redo (Ctrl+Shift+Z)" icon={<Redo2 size={ICON} />} disabled={disabled || !s.canRedo} onClick={() => chain().redo().run()} />
        <Divider />

        <Dropdown label="Text style" trigger={<span className="w-[84px] truncate text-left text-[13px]">{blockLabel}</span>} width={200}>
          {(close) =>
            BLOCK_TYPES.map((b) => (
              <MenuItem
                key={b.level}
                active={s.level === b.level}
                onClick={() => {
                  if (b.level === 0) chain().setParagraph().run();
                  else chain().setHeading({ level: b.level as 1 | 2 | 3 | 4 | 5 | 6 }).run();
                  close();
                }}
              >
                <span className={b.className}>{b.label}</span>
              </MenuItem>
            ))
          }
        </Dropdown>

        <Dropdown label="Font" trigger={<span className="w-[62px] truncate text-left text-[13px]">{FONT_FAMILIES.find((f) => f.value === s.fontFamily)?.label || "Font"}</span>}>
          {(close) =>
            FONT_FAMILIES.map((f) => (
              <MenuItem
                key={f.label}
                active={(s.fontFamily || "") === f.value}
                onClick={() => {
                  if (f.value) chain().setFontFamily(f.value).run();
                  else chain().unsetFontFamily().run();
                  close();
                }}
              >
                <span style={{ fontFamily: f.value || undefined }}>{f.label}</span>
              </MenuItem>
            ))
          }
        </Dropdown>

        <FontSizeDropdown editor={editor} current={s.fontSize} />
        <Divider />

        <ToolButton label="Bold (Ctrl+B)" icon={<Bold size={ICON} />} active={s.bold} onClick={() => chain().toggleBold().run()} />
        <ToolButton label="Italic (Ctrl+I)" icon={<Italic size={ICON} />} active={s.italic} onClick={() => chain().toggleItalic().run()} />
        <ToolButton label="Underline (Ctrl+U)" icon={<Underline size={ICON} />} active={s.underline} onClick={() => chain().toggleUnderline().run()} />
        <ToolButton label="Strikethrough" icon={<Strikethrough size={ICON} />} active={s.strike} onClick={() => chain().toggleStrike().run()} />
        <ToolButton label="Subscript" icon={<Subscript size={ICON} />} active={s.sub} onClick={() => chain().toggleSubscript().run()} />
        <ToolButton label="Superscript" icon={<Superscript size={ICON} />} active={s.sup} onClick={() => chain().toggleSuperscript().run()} />
        <ToolButton label="Inline code" icon={<Code size={ICON} />} active={s.code} onClick={() => chain().toggleCode().run()} />
        <Divider />

        <Dropdown
          label="Text colour"
          active={!!s.color}
          trigger={
            <span className="flex flex-col items-center">
              <Baseline size={ICON} />
              <span className="-mt-0.5 h-[3px] w-4 rounded" style={{ background: s.color || "#fff" }} />
            </span>
          }
        >
          {(close) => (
            <ColorPalette
              colors={TEXT_COLORS}
              current={s.color}
              checkContrast
              onPick={(c) => {
                chain().setColor(c).run();
                close();
              }}
              onClear={() => {
                chain().unsetColor().run();
                close();
              }}
            />
          )}
        </Dropdown>

        <Dropdown
          label="Highlight"
          active={!!s.highlight}
          trigger={
            <span className="flex flex-col items-center">
              <Highlighter size={ICON} />
              <span className="-mt-0.5 h-[3px] w-4 rounded" style={{ background: s.highlight || "transparent" }} />
            </span>
          }
        >
          {(close) => (
            <ColorPalette
              colors={HIGHLIGHT_COLORS}
              current={s.highlight}
              clearLabel="No highlight"
              onPick={(c) => {
                chain().setHighlight({ color: c }).run();
                close();
              }}
              onClear={() => {
                chain().unsetHighlight().unsetBackgroundColor().run();
                close();
              }}
            />
          )}
        </Dropdown>
        <Divider />

        <Dropdown label="Alignment" trigger={<AlignIcon size={ICON} />} width={170}>
          {(close) =>
            (
              [
                ["left", "Left", TextAlignStart],
                ["center", "Center", TextAlignCenter],
                ["right", "Right", TextAlignEnd],
                ["justify", "Justify", TextAlignJustify],
              ] as const
            ).map(([value, label, Icon]) => (
              <MenuItem
                key={value}
                active={s.align === value}
                onClick={() => {
                  if (value === "left") chain().unsetTextAlign().run();
                  else chain().setTextAlign(value).run();
                  close();
                }}
              >
                <Icon size={15} /> {label}
              </MenuItem>
            ))
          }
        </Dropdown>

        <ToolButton label="Bullet list" icon={<List size={ICON} />} active={s.bullet} onClick={() => chain().toggleBulletList().run()} />
        <ToolButton label="Numbered list" icon={<ListOrdered size={ICON} />} active={s.ordered} onClick={() => chain().toggleOrderedList().run()} />
        <ToolButton label="Decrease indent (Shift+Tab)" icon={<ListIndentDecrease size={ICON} />} disabled={!s.inList} onClick={() => chain().liftListItem("listItem").run()} />
        <ToolButton label="Increase indent (Tab)" icon={<ListIndentIncrease size={ICON} />} disabled={!s.inList} onClick={() => chain().sinkListItem("listItem").run()} />
        <Divider />

        <ToolButton label="Link (Ctrl+K)" icon={<Link size={ICON} />} active={s.link} onClick={actions.openLink} />
        <ToolButton label="Image" icon={<ImagePlus size={ICON} />} onClick={actions.openImage} />
        <TableDropdown editor={editor} />
        <ToolButton label="YouTube video" icon={<Youtube size={ICON} />} onClick={actions.openYoutube} />
        <ToolButton label="Quote" icon={<Quote size={ICON} />} active={s.quote} onClick={() => chain().toggleBlockquote().run()} />
        <ToolButton label="Code block" icon={<SquareCode size={ICON} />} active={s.codeBlock} onClick={() => chain().toggleCodeBlock().run()} />
        <ToolButton label="Divider line" icon={<Minus size={ICON} />} onClick={() => chain().setHorizontalRule().run()} />
        <ToolButton label="Custom HTML block" icon={<CodeXml size={ICON} />} onClick={actions.insertHtml} />
        <Divider />

        <ToolButton
          label="Clear formatting"
          icon={<RemoveFormatting size={ICON} />}
          onClick={() => chain().unsetAllMarks().unsetTextAlign().clearNodes().run()}
        />

        <div className="ml-auto flex items-center gap-0.5">
          <Dropdown label="Paste mode" trigger={<ClipboardPaste size={ICON} />} width={290} align="right">
            {(close) => (
              <div className="p-1">
                <p className="px-2 pb-1 pt-1 text-[11px] uppercase tracking-wide text-white/50">When pasting from Docs, Word or websites</p>
                {PASTE_MODES.map((m) => (
                  <MenuItem
                    key={m.value}
                    active={pasteMode === m.value}
                    onClick={() => {
                      actions.setPasteMode(m.value);
                      close();
                    }}
                  >
                    <span className="flex flex-col items-start text-left">
                      <span className="text-sm">{m.label}</span>
                      <span className="text-[11px] leading-snug text-white/50">{m.hint}</span>
                    </span>
                  </MenuItem>
                ))}
              </div>
            )}
          </Dropdown>
          <ToolButton label={sourceMode ? "Back to visual editor" : "Edit HTML source"} icon={<FileCode2 size={ICON} />} active={sourceMode} onClick={actions.toggleSource} />
          <ToolButton
            label={fullscreen ? "Exit fullscreen (Esc)" : "Fullscreen"}
            icon={fullscreen ? <Minimize2 size={ICON} /> : <Maximize2 size={ICON} />}
            onClick={actions.toggleFullscreen}
          />
        </div>
      </div>

      {s.inTable && !sourceMode && (
        <div className="bw-toolbar bw-toolbar-context">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-[#54acbf]">Table</span>
          <ToolButton label="Row above" icon={<BetweenHorizontalStart size={ICON} />} onClick={() => chain().addRowBefore().run()} />
          <ToolButton label="Row below" icon={<BetweenHorizontalEnd size={ICON} />} onClick={() => chain().addRowAfter().run()} />
          <ToolButton label="Delete row" onClick={() => chain().deleteRow().run()}>
            <span className="text-xs">− Row</span>
          </ToolButton>
          <Divider />
          <ToolButton label="Column left" icon={<BetweenVerticalStart size={ICON} />} onClick={() => chain().addColumnBefore().run()} />
          <ToolButton label="Column right" icon={<BetweenVerticalEnd size={ICON} />} onClick={() => chain().addColumnAfter().run()} />
          <ToolButton label="Delete column" onClick={() => chain().deleteColumn().run()}>
            <span className="text-xs">− Col</span>
          </ToolButton>
          <Divider />
          <ToolButton label="Merge cells" icon={<TableCellsMerge size={ICON} />} disabled={!s.canMerge} onClick={() => chain().mergeCells().run()} />
          <ToolButton label="Split cell" icon={<TableCellsSplit size={ICON} />} disabled={!s.canSplit} onClick={() => chain().splitCell().run()} />
          <ToolButton label="Toggle header row" icon={<PanelTop size={ICON} />} onClick={() => chain().toggleHeaderRow().run()} />
          <ToolButton label="Toggle header column" icon={<PanelLeft size={ICON} />} onClick={() => chain().toggleHeaderColumn().run()} />
          <Dropdown label="Cell background" trigger={<PaintBucket size={ICON} />} active={!!s.cellBg}>
            {(close) => (
              <ColorPalette
                colors={CELL_COLORS}
                current={s.cellBg}
                clearLabel="No background"
                onPick={(c) => {
                  chain().setCellAttribute("backgroundColor", c).run();
                  close();
                }}
                onClear={() => {
                  chain().setCellAttribute("backgroundColor", null).run();
                  close();
                }}
              />
            )}
          </Dropdown>
          <Divider />
          <ToolButton label="Delete table" icon={<Trash2 size={ICON} className="text-red-300" />} onClick={() => chain().deleteTable().run()} />
        </div>
      )}
    </div>
  );
}

function FontSizeDropdown({ editor, current }: { editor: Editor; current: string | null }) {
  const [custom, setCustom] = useState("");
  const apply = (size: string) => editor.chain().focus().setFontSize(size).run();
  return (
    <Dropdown label="Font size" trigger={<span className="w-[38px] text-left text-[13px]">{current ? current.replace("px", "") : "Size"}</span>} width={150}>
      {(close) => (
        <div>
          <div className="max-h-64 overflow-y-auto">
            <MenuItem
              active={!current}
              onClick={() => {
                editor.chain().focus().unsetFontSize().run();
                close();
              }}
            >
              Default
            </MenuItem>
            {FONT_SIZES.map((size) => (
              <MenuItem
                key={size}
                active={current === size}
                onClick={() => {
                  apply(size);
                  close();
                }}
              >
                {size.replace("px", "")}
              </MenuItem>
            ))}
          </div>
          <form
            className="flex gap-1 border-t border-white/10 p-2"
            onSubmit={(e) => {
              e.preventDefault();
              const n = parseFloat(custom);
              if (n >= 8 && n <= 120) {
                apply(`${n}px`);
                setCustom("");
                close();
              }
            }}
          >
            <input className="bw-input h-7 w-full text-xs" placeholder="Custom px" value={custom} onChange={(e) => setCustom(e.target.value)} inputMode="numeric" />
          </form>
        </div>
      )}
    </Dropdown>
  );
}

function TableDropdown({ editor }: { editor: Editor }) {
  const [hover, setHover] = useState<[number, number]>([0, 0]);
  const [header, setHeader] = useState(true);
  const SIZE = 8;
  return (
    <Dropdown label="Insert table" trigger={<Table size={ICON} />} width={228}>
      {(close) => (
        <div className="p-2">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }} onMouseLeave={() => setHover([0, 0])}>
            {Array.from({ length: SIZE * SIZE }, (_, i) => {
              const r = Math.floor(i / SIZE) + 1;
              const c = (i % SIZE) + 1;
              const on = r <= hover[0] && c <= hover[1];
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`${r} by ${c} table`}
                  onMouseEnter={() => setHover([r, c])}
                  onClick={() => {
                    editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: header }).run();
                    close();
                  }}
                  className={`h-5 w-5 rounded-sm border ${on ? "border-[#54acbf] bg-[#54acbf]/40" : "border-white/20"}`}
                />
              );
            })}
          </div>
          <p className="mt-2 text-center text-xs text-white/70">{hover[0] ? `${hover[0]} × ${hover[1]}` : "Select size"}</p>
          <label className="mt-2 flex items-center gap-2 text-xs text-white/80">
            <input type="checkbox" checked={header} onChange={(e) => setHeader(e.target.checked)} /> First row is a header
          </label>
        </div>
      )}
    </Dropdown>
  );
}
