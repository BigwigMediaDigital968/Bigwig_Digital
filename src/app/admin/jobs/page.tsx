"use client";
import { useEffect, useState } from "react";
import "../../../app/globals.css";
import { MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { Badge, EmptyState, FormField, IconAction, PageHeader } from "../../../../components/admin/AdminUI";
import { Modal } from "../../../../components/blog-editor/ui";

const initialForm = {
  title: "",
  location: "",
  jd: "",
  responsibilities: [] as string[],
  requirements: [] as string[],
  jobType: "Full-time",
  workMode: "Office",
};
interface Job {
  _id: string;
  title: string;
  location: string;
  jd: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  workMode: string;
}

const AddJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState(initialForm);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  const fetchJobs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`);
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "responsibilities" || name === "requirements") {
      setForm({ ...form, [name]: value.split("\n").filter(Boolean) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const openPopup = (job = initialForm, id = "", editing = false) => {
    setForm(job);
    setEditId(id);
    setIsEditing(editing);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setForm(initialForm);
    setIsPopupOpen(false);
    setEditId("");
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    const method = isEditing ? "PUT" : "POST";
    const endpoint = isEditing
      ? `${process.env.NEXT_PUBLIC_API_BASE}/api/jobs/${editId}`
      : `${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`;

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      fetchJobs();
      closePopup();
    } else {
      alert("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job?")) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/jobs/${id}`,
      { method: "DELETE" }
    );
    if (res.ok) fetchJobs();
  };

  return (
    <div>
      <PageHeader
        title="Job Vacancies"
        description={`${jobs.length} open position${jobs.length === 1 ? "" : "s"} on the careers page`}
        actions={
          <button onClick={() => openPopup()} className="bw-btn-primary">
            <Plus size={16} /> New job post
          </button>
        }
      />

      {/* Job List */}
      {jobs.length === 0 ? (
        <EmptyState
          title="No job vacancies"
          description="Create a job post to show it on the careers page."
          action={
            <button onClick={() => openPopup()} className="bw-btn-primary">
              <Plus size={16} /> New job post
            </button>
          }
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {jobs.map((job: Job) => (
            <article key={job._id} className="flex flex-col rounded-xl border border-white/10 bg-[#0d1726] p-5 transition hover:border-white/20">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-white">{job.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/55">
                    <MapPin size={14} /> {job.location}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <IconAction label="Edit job" onClick={() => openPopup(job, job._id, true)}>
                    <Pencil size={16} />
                  </IconAction>
                  <IconAction label="Delete job" danger onClick={() => handleDelete(job._id)}>
                    <Trash2 size={16} />
                  </IconAction>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <Badge tone="blue">{job.jobType}</Badge>
                <Badge tone="gray">{job.workMode}</Badge>
              </div>

              <div className="space-y-4 text-sm text-white/75">
                <div>
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-white/45">Responsibilities</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-[#54acbf]">
                    {job.responsibilities.map((r: string, i: number) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-white/45">Requirements</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-[#54acbf]">
                    {job.requirements.map((r: string, i: number) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Create / edit dialog */}
      {isPopupOpen && (
        <Modal
          title={isEditing ? "Edit job" : "Create job"}
          width={760}
          onClose={closePopup}
          footer={
            <>
              <button onClick={closePopup} className="bw-btn-ghost">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bw-btn-primary">
                {isEditing ? "Update" : "Create"}
              </button>
            </>
          }
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Job title">
              <input type="text" name="title" value={form.title} onChange={handleInputChange} placeholder="e.g. SEO Executive" className="bw-input" />
            </FormField>
            <FormField label="Location">
              <input type="text" name="location" value={form.location} onChange={handleInputChange} placeholder="e.g. Delhi" className="bw-input" />
            </FormField>
            <FormField label="Job type">
              <select name="jobType" value={form.jobType} onChange={handleInputChange} className="bw-input">
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
            </FormField>
            <FormField label="Work mode">
              <select name="workMode" value={form.workMode} onChange={handleInputChange} className="bw-input">
                <option value="">Select Work Mode</option>
                <option value="Office">Office</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </FormField>
            <FormField label="Responsibilities (one per line)" className="sm:col-span-2">
              <textarea
                name="responsibilities"
                value={form.responsibilities.join("\n")}
                onChange={handleInputChange}
                className="bw-input resize-y"
                rows={4}
              />
            </FormField>
            <FormField label="Requirements (one per line)" className="sm:col-span-2">
              <textarea
                name="requirements"
                value={form.requirements.join("\n")}
                onChange={handleInputChange}
                className="bw-input resize-y"
                rows={4}
              />
            </FormField>
            <FormField label="Job description" className="sm:col-span-2">
              <textarea name="jd" value={form.jd} onChange={handleInputChange} className="bw-input resize-y" rows={5} />
            </FormField>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddJobs;
