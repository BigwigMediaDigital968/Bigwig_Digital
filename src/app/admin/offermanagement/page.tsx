"use client";

import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { Edit, Trash, Plus, X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.NEXT_PUBLIC_API_BASE;

type Offer = {
  _id: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  image: string; // single image
  startDate: string;
  endDate: string;
  isActive: boolean;
  views: number;
  clicks: number;
};

export default function OfferAdmin() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<any>({
    title: "",
    subtitle: "",
    ctaLabel: "View Offer",
    ctaLink: "",
    startDate: "",
    endDate: "",
    isActive: true,
    image: null,
  });

  // Fetch all offers
  const fetchOffers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/offer/get`);
      const data = await res.json();
      if (data?.success) setOffers(data.offers);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleChange = (e: any) => {
    const { name, type, value, files, checked } = e.target;

    if (type === "file") {
      const file = files?.[0] || null;
      setFormData({ ...formData, [name]: file });

      if (file) setImagePreview(URL.createObjectURL(file));
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      if (v !== null && v !== undefined) fd.append(k, v as any);
    });

    const url = editingOffer
      ? `${API_URL}/api/offer/add/${editingOffer._id}`
      : `${API_URL}/api/offer/add`;
    const method = editingOffer ? "PUT" : "POST";

    const res = await fetch(url, { method, body: fd });
    const data = await res.json();

    if (data.success) {
      toast.success(editingOffer ? "Offer updated" : "Offer created");
      fetchOffers();
      setShowForm(false);
      setEditingOffer(null);
      setImagePreview(null);
      setFormData({
        title: "",
        subtitle: "",
        ctaLabel: "View Offer",
        ctaLink: "",
        startDate: "",
        endDate: "",
        isActive: true,
        image: null,
      });
    } else {
      toast.error(data.message || "Something went wrong");
    }
  };

  const handleEdit = (offer: Offer) => {
    setEditingOffer(offer);
    setShowForm(true);
    setImagePreview(null);
    setFormData({
      title: offer.title,
      subtitle: offer.subtitle || "",
      ctaLabel: offer.ctaLabel || "View Offer",
      ctaLink: offer.ctaLink || "",
      startDate: offer.startDate.split("T")[0],
      endDate: offer.endDate.split("T")[0],
      isActive: offer.isActive,
      image: null,
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this offer?")) return;
    await fetch(`${API_URL}/api/${id}`, { method: "DELETE" });
    toast.success("Offer deleted");
    fetchOffers();
  };

  const toggleStatus = async (offer: Offer) => {
    const fd = new FormData();
    fd.append("isActive", String(!offer.isActive));
    await fetch(`${API_URL}/api/offer/add/${offer._id}`, { method: "PUT", body: fd });
    fetchOffers();
  };

  return (
    <div className="min-h-screen text-black relative bg-white">
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center max-w-6xl mx-auto pl-95">
          <h2 className="text-3xl font-bold">Offer Management</h2>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary-color px-5 py-2 rounded-lg shadow hover:bg-color4 transition"
          >
            <Plus size={18} /> Add Offer
          </button>
        </div>

        {/* MODAL FORM */}
        {showForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={() => setShowForm(false)}
          >
            <form
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-white p-6 rounded-2xl shadow-xl space-y-4 animate-fadeIn"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  {editingOffer ? "Edit Offer" : "Create New Offer"}
                </h3>
                <button type="button" onClick={() => setShowForm(false)}>
                  <X />
                </button>
              </div>

              <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-color3 border border-color4"
              />

              <textarea
                name="subtitle"
                placeholder="Subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="w-full p-2 rounded bg-color3 border border-color4"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="ctaLabel"
                  placeholder="CTA Label"
                  value={formData.ctaLabel}
                  onChange={handleChange}
                  className="p-2 rounded bg-color3 border border-color4"
                />
                <input
                  name="ctaLink"
                  placeholder="CTA Link"
                  value={formData.ctaLink}
                  onChange={handleChange}
                  className="p-2 rounded bg-color3 border border-color4"
                />
              </div>

              <div className="flex gap-4 items-center">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="p-2 rounded bg-color3 border border-color4"
                />
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="p-2 rounded bg-color3 border border-color4"
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />
                  Active
                </label>
              </div>

              <div>
                <input type="file" name="image" onChange={handleChange} />
                {imagePreview && (
                  <div className="relative mt-2 w-40 h-24">
                    <img
                      src={imagePreview}
                      className="w-full h-full object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              <button className="bg-primary-color px-6 py-2 rounded-lg shadow hover:bg-color4 transition">
                {editingOffer ? "Update Offer" : "Create Offer"}
              </button>
            </form>
          </div>
        )}

        {/* TABLE */}
        <div className="bg-color2/90 p-6 rounded-2xl shadow-xl overflow-x-auto">
          <table className="w-full text-md border border-color4">
            <thead className="bg-color3">
              <tr>
                {["#", "Title", "CTA", "Views", "Clicks", "Status", "Image", "Actions"].map(
                  (h) => (
                    <th key={h} className="p-2 border">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, i) => (
                <tr key={offer._id}>
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{offer.title}</td>
                  <td className="p-2">{offer.ctaLabel}</td>
                  <td className="p-2">{offer.views}</td>
                  <td className="p-2">{offer.clicks}</td>
                  <td className="p-2">
                    <button
                      onClick={() => toggleStatus(offer)}
                      className={`px-3 py-1 rounded ${
                        offer.isActive ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {offer.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="relative w-55 h-55">
                    <Image
                      src={`${API_URL}/${offer.image.replace(/\\/g, "/")}`}
                      alt=""
                      fill
                      
                      className="object-cover rounded"
                      unoptimized
                    />
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(offer)}
                      className="bg-secondary-color px-3 py-1 rounded flex gap-1 items-center"
                    >
                      <Edit size={14} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(offer._id)}
                      className="bg-red-600 px-3 py-1 rounded flex gap-1 items-center"
                    >
                      <Trash size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2500} hideProgressBar />
    </div>
  );
}
