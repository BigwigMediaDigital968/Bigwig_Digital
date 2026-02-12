"use client";

import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { createPortal } from "react-dom";

interface Props {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const RichTextEditor = ({ value, onChange, label }: Props) => {
  const quillRef = useRef<any>(null);

  /* ---------------- Image Modal State ---------------- */

  const [showModal, setShowModal] = useState(false);
  const [editingImage, setEditingImage] = useState<HTMLImageElement | null>(
    null,
  );

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [imageLink, setImageLink] = useState("");

  /* ---------------- Toolbar ---------------- */

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["link", "image"],
    ["clean"],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: () => {
          resetModal();
          setShowModal(true);
        },
      },
    },
  };

  /* ---------------- Image Click → Edit ---------------- */

  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === "IMG") {
        const img = target as HTMLImageElement;

        setEditingImage(img);
        setImageUrl(img.src);
        setAltText(img.alt || "");
        setImageLink(
          img.parentElement?.tagName === "A"
            ? (img.parentElement as HTMLAnchorElement).href
            : "",
        );

        setShowModal(true);
      }
    };

    quill.root.addEventListener("click", handler);
    return () => quill.root.removeEventListener("click", handler);
  }, []);

  /* ---------------- Helpers ---------------- */

  const resetModal = () => {
    setEditingImage(null);
    setImageFile(null);
    setImageUrl("");
    setAltText("");
    setImageLink("");
  };

  /* ---------------- Upload + Insert ---------------- */

  const handleInsertOrUpdate = async () => {
    let finalImageUrl = imageUrl;

    if (!imageFile && !imageUrl) {
      alert("Please upload an image or provide an image URL");
      return;
    }

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/upload/editor-image`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      finalImageUrl = data.url;
    }

    if (!finalImageUrl) return;

    const quill = quillRef.current?.getEditor();

    const imgHTML = `<img src="${finalImageUrl}" alt="${altText}" loading="lazy" />`;
    const wrappedHTML = imageLink
      ? `<a href="${imageLink}" target="_blank" rel="noopener noreferrer">${imgHTML}</a>`
      : imgHTML;

    if (editingImage?.parentElement?.tagName === "A") {
      const anchor = editingImage.parentElement;
      anchor.replaceWith(editingImage);
    }

    if (editingImage) {
      const blot = quill.scroll.find(editingImage);
      const index = blot.offset(quill.scroll);

      quill.deleteText(index, 1);
      quill.clipboard.dangerouslyPasteHTML(index, wrappedHTML);
    } else {
      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();

      quill.clipboard.dangerouslyPasteHTML(index, wrappedHTML);
    }

    setShowModal(false);
    resetModal();
  };

  /* ---------------- Render ---------------- */

  return (
    <>
      {label && <label className="block mb-2 font-medium">{label}</label>}

      <div className="border rounded-lg bg-white overflow-hidden">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          className="min-h-[280px]"
        />
      </div>

      {/* ---------------- Image Modal ---------------- */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">
                {editingImage ? "Edit Image" : "Insert Image"}
              </h3>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="mb-3 w-full"
              />

              <input
                placeholder="Or Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full border p-2 mb-3"
              />

              <input
                placeholder="Alt text (SEO)"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="w-full border p-2 mb-3"
              />

              <input
                placeholder="Optional link"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="w-full border p-2 mb-4"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetModal();
                  }}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleInsertOrUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {editingImage ? "Update" : "Insert"}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default RichTextEditor;
