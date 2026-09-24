import type { Editor } from "@tiptap/core";

/** Storage shared between node views and the editor component (dialog openers). */
export interface NodeStorage {
  onEdit: null | ((pos: number) => void);
}

export const nodeStorage = (editor: Editor, name: "image" | "htmlBlock") =>
  (editor.storage as unknown as Record<string, NodeStorage>)[name];

export type ImageAlign = "left" | "center" | "right" | null;

export interface ImageAttrs {
  src: string;
  alt: string;
  title: string | null;
  width: string | null; // "50%" | "320px"
  align: ImageAlign;
  href: string | null;
  newTab: boolean;
  caption: string | null;
  /** Not saved: image still has to be uploaded / copied to Cloudinary. */
  pending: boolean;
}

/** Inline CSS for the image (or figure) box. Shared by the node view and the saved HTML. */
export function imageBoxCss(width: string | null, align: ImageAlign) {
  const css: Record<string, string> = {};
  if (width) css.width = width;
  if (align === "center") {
    css.display = "block";
    css["margin-left"] = "auto";
    css["margin-right"] = "auto";
  } else if (align === "left") {
    css.float = "left";
    css.margin = "0.25rem 1.5rem 1rem 0";
  } else if (align === "right") {
    css.float = "right";
    css.margin = "0.25rem 0 1rem 1.5rem";
  }
  return css;
}
