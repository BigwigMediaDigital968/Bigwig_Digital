"use client";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { createPortal } from "react-dom";

/* ---------------- Types ---------------- */

interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
  name: string;
  url: string;
  position: number;
}

interface CustomSchema {
  name: string;
  json: string; // raw JSON-LD string
}

interface SchemaSettings {
  article: boolean;
  breadcrumb: boolean;
  faq: boolean;
  organization: boolean;
  speakable: boolean;
  video: boolean;
  image: boolean;
}

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string;
  category: string;
  faqs?: FAQ[];
  breadcrumbs?: Breadcrumb[];
  schemaSettings?: SchemaSettings;
  customSchemas?: CustomSchema[];
}

/* ---------------- Constants ---------------- */

const categoryOptions = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Designing & Development",
  "Email Marketing",
  "Social Media Optimization",
  "Graphic Designing",
  "AI and CGI Marketing",
  "Landing Page Optimization",
  "Affiliate Marketing",
  "Video Shoot",
  "Public Relations",
  "Influencer Marketing",
  "Online Reputation Management",
  "Digital Marketing",
];

const defaultSchemaSettings: SchemaSettings = {
  article: true,
  breadcrumb: true,
  faq: true,
  organization: true,
  speakable: false,
  video: false,
  image: true,
};

/* ---------------- Component ---------------- */

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImage: null as File | null,
    category: "",
    faqs: [] as FAQ[],
    breadcrumbs: [] as Breadcrumb[],
    schemaSettings: defaultSchemaSettings,
    customSchemas: [] as CustomSchema[],
  });

  const [submitting, setSubmitting] = useState(false);
  const quillRef = useRef<any>(null);

  /* ---------------- Populate Edit Mode ---------------- */

  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        slug: existingBlog.slug,
        excerpt: existingBlog.excerpt,
        content: existingBlog.content,
        author: existingBlog.author,
        tags: existingBlog.tags || "",
        coverImage: null,
        category: existingBlog.category,
        faqs: existingBlog.faqs || [],
        breadcrumbs: existingBlog.breadcrumbs || [],
        schemaSettings: existingBlog.schemaSettings || defaultSchemaSettings,
        customSchemas: existingBlog.customSchemas || [],
      });
    }
  }, [existingBlog]);

  /* ---------------- Image URL Modal ---------------- */

  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageLink, setImageLink] = useState("");

  const insertImageByUrl = () => {
    if (!imageUrl.startsWith("http")) {
      alert("Please enter a valid image URL");
      return;
    }

    const quill = quillRef.current?.getEditor();
    const range = quill.getSelection(true);

    let imageHTML = `<img src="${imageUrl}" alt="${imageAlt}" loading="lazy" />`;

    if (imageLink) {
      imageHTML = `<a href="${imageLink}" target="_blank" rel="noopener noreferrer">${imageHTML}</a>`;
    }

    quill.clipboard.dangerouslyPasteHTML(range.index, imageHTML);

    setShowImageModal(false);
    setImageUrl("");
    setImageAlt("");
    setImageLink("");
  };

  /* ---------------- Editor Toolbar ---------------- */

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
    ["link"],
    ["image"],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: () => setShowImageModal(true),
      },
    },
  };

  /* ---------------- Handlers ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: autoSlug,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        coverImage: e.target.files![0],
      }));
    }
  };

  /* ---------------- FAQ Handlers ---------------- */

  const addFAQ = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const updateFAQ = (
    index: number,
    field: "question" | "answer",
    value: string,
  ) => {
    const updatedFAQs = [...formData.faqs];
    updatedFAQs[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      faqs: updatedFAQs,
    }));
  };

  const removeFAQ = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  // Breadcrumb Handler

  const addBreadcrumb = () => {
    setFormData((prev) => ({
      ...prev,
      breadcrumbs: [
        ...prev.breadcrumbs,
        {
          name: "",
          url: "",
          position: prev.breadcrumbs.length + 1,
        },
      ],
    }));
  };

  const updateBreadcrumb = (
    index: number,
    field: "name" | "url",
    value: string,
  ) => {
    const updated = [...formData.breadcrumbs];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      breadcrumbs: updated,
    }));
  };

  const removeBreadcrumb = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      breadcrumbs: prev.breadcrumbs.filter((_, i) => i !== index),
    }));
  };

  // Custom Schema Handler
  const addCustomSchema = () => {
    setFormData((prev) => ({
      ...prev,
      customSchemas: [...prev.customSchemas, { name: "", json: "" }],
    }));
  };

  const updateCustomSchema = (
    index: number,
    field: "name" | "json",
    value: string,
  ) => {
    const updated = [...formData.customSchemas];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      customSchemas: updated,
    }));
  };

  const removeCustomSchema = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      customSchemas: prev.customSchemas.filter((_, i) => i !== index),
    }));
  };

  /* ---------------- Submit ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const blogData = new FormData();

      blogData.append("title", formData.title);
      blogData.append("slug", formData.slug);
      blogData.append("excerpt", formData.excerpt);
      blogData.append("content", formData.content);
      blogData.append("author", formData.author);
      blogData.append("tags", formData.tags);
      blogData.append("category", formData.category);

      blogData.append(
        "faqs",
        JSON.stringify(formData.faqs.filter((f) => f.question && f.answer)),
      );

      blogData.append(
        "breadcrumbs",
        JSON.stringify(formData.breadcrumbs.filter((b) => b.name && b.url)),
      );

      blogData.append(
        "customSchemas",
        JSON.stringify(formData.customSchemas.filter((s) => s.name && s.json)),
      );

      // blogData.append("faqs", JSON.stringify(formData.faqs));
      // blogData.append("breadcrumbs", JSON.stringify(formData.breadcrumbs));
      blogData.append(
        "schemaSettings",
        JSON.stringify(formData.schemaSettings),
      );

      if (formData.coverImage) {
        blogData.append("coverImage", formData.coverImage);
      }

      const res = await fetch(
        existingBlog
          ? `${process.env.NEXT_PUBLIC_API_BASE}/${existingBlog.slug}`
          : `${process.env.NEXT_PUBLIC_API_BASE}/add`,
        {
          method: existingBlog ? "PUT" : "POST",
          body: blogData,
        },
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Network or server error");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- UI (UNCHANGED STYLE) ---------------- */

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white text-black p-6 w-full max-w-2xl rounded-xl overflow-y-auto max-h-[90vh]">
          <h2 className="text-2xl font-bold mb-4 text-black">
            {existingBlog ? "Edit Blog" : "Add New Blog"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 border"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="slug"
              placeholder="Slug"
              className="w-full p-2 border"
              value={formData.slug}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="excerpt"
              placeholder="Meta description"
              className="w-full p-2 border"
              value={formData.excerpt}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              className="w-full p-2 border"
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              required
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div>
              <label className="block font-medium mb-2">Blog Content</label>
              <div className="border rounded overflow-hidden">
                <ReactQuill
                  theme="snow"
                  ref={quillRef}
                  value={formData.content}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      content: value,
                    }))
                  }
                  // modules={{ toolbar: toolbarOptions }}
                  modules={modules}
                  className="react-quill-editor"
                />
              </div>
            </div>

            <input
              type="text"
              name="author"
              placeholder="Author"
              className="w-full p-2 border"
              value={formData.author}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              className="w-full p-2 border"
              value={formData.tags}
              onChange={handleChange}
            />

            <input
              type="file"
              accept="image/*"
              className="w-min border-2 cursor-pointer p-3"
              onChange={handleImageChange}
              required={!existingBlog}
            />

            {/* ---------------- FAQ Section ---------------- */}
            <div>
              <label className="block font-medium mb-2">FAQs</label>

              {formData.faqs.map((faq, index) => (
                <div key={index} className="border p-3 rounded mb-3 bg-gray-50">
                  <input
                    type="text"
                    placeholder={`Question ${index + 1}`}
                    className="w-full p-2 border mb-2"
                    value={faq.question}
                    onChange={(e) =>
                      updateFAQ(index, "question", e.target.value)
                    }
                    required
                  />

                  <textarea
                    placeholder="Answer"
                    className="w-full p-2 border"
                    rows={3}
                    value={faq.answer}
                    onChange={(e) => updateFAQ(index, "answer", e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => removeFAQ(index)}
                    className="mt-2 text-sm text-red-600 cursor-pointer border-black border-2 px-3 py-1"
                  >
                    Remove FAQ
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addFAQ}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-pointer"
              >
                + Add FAQ
              </button>
            </div>

            {/* ---------------- Breadcrumbs ---------------- */}
            <div>
              <label className="block font-medium mb-2">
                Breadcrumbs (Optional)
              </label>

              {formData.breadcrumbs.map((bc, index) => (
                <div key={index} className="border p-3 rounded mb-3 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Breadcrumb Name"
                    className="w-full p-2 border mb-2"
                    value={bc.name}
                    onChange={(e) =>
                      updateBreadcrumb(index, "name", e.target.value)
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="URL (https://...)"
                    className="w-full p-2 border mb-2"
                    value={bc.url}
                    onChange={(e) =>
                      updateBreadcrumb(index, "url", e.target.value)
                    }
                    required
                  />

                  <button
                    type="button"
                    onClick={() => removeBreadcrumb(index)}
                    className="mt-2 text-sm text-red-600 cursor-pointer border-black border-2 px-3 py-1"
                  >
                    Remove Breadcrumb
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addBreadcrumb}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-pointer"
              >
                + Add Breadcrumb
              </button>
            </div>

            {/* ---------------- Custom Schemas ---------------- */}
            <div>
              <label className="block font-medium mb-2">
                Custom JSON-LD Schemas (Optional)
              </label>

              {formData.customSchemas.map((schema, index) => (
                <div key={index} className="border p-3 rounded mb-3 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Schema Name (e.g. Event, Product)"
                    className="w-full p-2 border mb-2"
                    value={schema.name}
                    onChange={(e) =>
                      updateCustomSchema(index, "name", e.target.value)
                    }
                  />

                  <textarea
                    placeholder="Paste valid JSON-LD here"
                    className="w-full p-2 border font-mono text-sm"
                    rows={6}
                    value={schema.json}
                    onChange={(e) =>
                      updateCustomSchema(index, "json", e.target.value)
                    }
                  />

                  <button
                    type="button"
                    onClick={() => removeCustomSchema(index)}
                    className="mt-2 text-sm text-red-600 cursor-pointer border-black border-2 px-3 py-1"
                  >
                    Remove Schema
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addCustomSchema}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-pointer"
              >
                + Add Custom Schema
              </button>
            </div>

            {/* Schema Toggles – same simple UI */}
            <div>
              <label className="block font-medium mb-2">Schema Settings</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(formData.schemaSettings).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          schemaSettings: {
                            ...prev.schemaSettings,
                            [key]: e.target.checked,
                          },
                        }))
                      }
                    />
                    {key}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 text-white rounded ${
                  submitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={submitting}
              >
                {submitting
                  ? existingBlog
                    ? "Updating..."
                    : "Adding..."
                  : existingBlog
                    ? "Update"
                    : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showImageModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Insert Image (URL)</h3>

              <input
                className="w-full p-2 border mb-3"
                placeholder="Image URL (https://...)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <input
                className="w-full p-2 border mb-3"
                placeholder="Alt text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
              />
              <input
                className="w-full p-2 border mb-4"
                placeholder="Optional link"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowImageModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={insertImageByUrl}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Insert
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default AddBlog;
