"use client";

import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { Edit, Eye, MousePointerClick, Trash, Plus, X } from "lucide-react";
import { Badge, EmptyState, FormField, IconAction, PageHeader, Panel, table } from "../../../../components/admin/AdminUI";
import { Modal } from "../../../../components/blog-editor/ui";
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
    <div>
      <PageHeader
        title="Offers"
        description="Promotional popups shown on the website."
        actions={
          <button onClick={() => setShowForm(true)} className="bw-btn-primary">
            <Plus size={16} /> Add offer
          </button>
        }
      />

      {/* Create / edit dialog */}
      {showForm && (
        <Modal
          title={editingOffer ? "Edit offer" : "Create offer"}
          width={720}
          onClose={() => setShowForm(false)}
          footer={
            <>
              <button type="button" className="bw-btn-ghost" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" form="offer-form" className="bw-btn-primary">
                {editingOffer ? "Update offer" : "Create offer"}
              </button>
            </>
          }
        >
          <form id="offer-form" onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Title">
              <input name="title" placeholder="e.g. Diwali Offer: 30% off SEO" value={formData.title} onChange={handleChange} required className="bw-input" />
            </FormField>

            <FormField label="Subtitle">
              <textarea name="subtitle" value={formData.subtitle} onChange={handleChange} rows={2} className="bw-input resize-y" />
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Button label">
                <input name="ctaLabel" value={formData.ctaLabel} onChange={handleChange} className="bw-input" />
              </FormField>
              <FormField label="Button link">
                <input name="ctaLink" placeholder="https://" value={formData.ctaLink} onChange={handleChange} className="bw-input" />
              </FormField>
            </div>

            <div className="grid items-end gap-4 sm:grid-cols-3">
              <FormField label="Start date">
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="bw-input [color-scheme:dark]" />
              </FormField>
              <FormField label="End date">
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="bw-input [color-scheme:dark]" />
              </FormField>
              <label className="flex h-[38px] items-center gap-2 text-sm text-white/85">
                <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="accent-[#54acbf]" />
                Active
              </label>
            </div>

            <FormField label="Image">
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="block w-full text-sm text-white/70 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-[#26658c] file:px-3 file:py-1.5 file:text-white"
              />
            </FormField>
            {imagePreview && (
              <div className="relative h-28 w-48 overflow-hidden rounded-lg border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={removeImage}
                  aria-label="Remove image"
                  className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-600"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </form>
        </Modal>
      )}

      {/* TABLE */}
      {offers.length === 0 ? (
        <EmptyState title="No offers yet" description="Create an offer to show a promotional popup on the website." />
      ) : (
        <Panel bodyClassName="">
          <div className={table.wrap}>
            <table className={`${table.table} min-w-[860px]`}>
              <thead className={table.thead}>
                <tr>
                  <th className={table.th}>Offer</th>
                  <th className={table.th}>Button</th>
                  <th className={`${table.th} text-right`}>Views</th>
                  <th className={`${table.th} text-right`}>Clicks</th>
                  <th className={table.th}>Status</th>
                  <th className={`${table.th} text-right`}>Actions</th>
                </tr>
              </thead>
              <tbody className={table.tbody}>
                {offers.map((offer) => (
                  <tr key={offer._id} className={table.tr}>
                    <td className={table.td}>
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md bg-white/5">
                          <Image
                            src={`${API_URL}/${offer.image.replace(/\\/g, "/")}`}
                            alt=""
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-white">{offer.title}</p>
                          <p className="text-xs text-white/45">
                            {new Date(offer.startDate).toLocaleDateString()} – {new Date(offer.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={table.td}>{offer.ctaLabel}</td>
                    <td className={`${table.td} text-right tabular-nums`}>
                      <span className="inline-flex items-center gap-1.5">
                        <Eye size={14} className="text-white/35" /> {offer.views}
                      </span>
                    </td>
                    <td className={`${table.td} text-right tabular-nums`}>
                      <span className="inline-flex items-center gap-1.5">
                        <MousePointerClick size={14} className="text-white/35" /> {offer.clicks}
                      </span>
                    </td>
                    <td className={table.td}>
                      <button onClick={() => toggleStatus(offer)} title="Click to toggle" className="cursor-pointer">
                        <Badge tone={offer.isActive ? "green" : "gray"}>
                          <span className={`h-1.5 w-1.5 rounded-full ${offer.isActive ? "bg-emerald-400" : "bg-white/40"}`} />
                          {offer.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </button>
                    </td>
                    <td className={table.td}>
                      <div className="flex justify-end gap-1">
                        <IconAction label="Edit offer" onClick={() => handleEdit(offer)}>
                          <Edit size={16} />
                        </IconAction>
                        <IconAction label="Delete offer" danger onClick={() => handleDelete(offer._id)}>
                          <Trash size={16} />
                        </IconAction>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      )}

      <ToastContainer position="bottom-right" autoClose={2500} theme="dark" />
    </div>
  );
}
