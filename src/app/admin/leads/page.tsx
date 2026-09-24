"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Eye, Mail, Phone, Trash2 } from "lucide-react";
import { Badge, EmptyState, IconAction, PageHeader, Pagination, Panel, table } from "../../../../components/admin/AdminUI";
import { Modal } from "../../../../components/blog-editor/ui";

interface ContactRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;

  message?: string;
  services?: string[];

  verified?: boolean;

  createdAt: string;
  updatedAt?: string;

  __v?: number;
}

const ITEMS_PER_PAGE = 20;

const AdminLead = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactRequest[]>(
    [],
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(
    null,
  );

  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

  const [loadingDelete, setLoadingDelete] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: ContactRequest, b: ContactRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => console.error("Error fetching contact requests:", err));
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredContacts(contacts);
      setCurrentPage(1);
      return;
    }
    const filtered = contacts.filter((c) =>
      new Date(c.createdAt).toISOString().startsWith(selectedDate),
    );
    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [selectedDate, contacts]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleDeleteLead = async () => {
    if (!leadToDelete) return;

    try {
      setLoadingDelete(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/${leadToDelete}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Lead deleted successfully");

        setContacts((prev) => prev.filter((lead) => lead._id !== leadToDelete));

        setFilteredContacts((prev) =>
          prev.filter((lead) => lead._id !== leadToDelete),
        );

        if (selectedContact?._id === leadToDelete) {
          setSelectedContact(null);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete lead");
    } finally {
      setDeleteModal(false);
      setLeadToDelete(null);
      setLoadingDelete(false);
    }
  };

  const handleBulkDelete = async () => {
    if (!selectedLeads.length) return;

    if (!window.confirm(`Delete ${selectedLeads.length} selected leads?`))
      return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/bulk/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: selectedLeads,
        }),
      },
    );

    const data = await res.json();

    if (data.success) {
      toast.success(data.message);

      setContacts((prev) =>
        prev.filter((lead) => !selectedLeads.includes(lead._id)),
      );

      setFilteredContacts((prev) =>
        prev.filter((lead) => !selectedLeads.includes(lead._id)),
      );

      setSelectedLeads([]);
    }
  };

  // console.log(contacts);

  const allOnPageSelected =
    currentContacts.length > 0 &&
    currentContacts.every((lead) => selectedLeads.includes(lead._id));

  return (
    <div>
      <PageHeader
        title="Leads"
        description={`${filteredContacts.length} ${selectedDate ? "on selected date" : "total"} · newest first`}
        actions={
          <div className="flex items-center gap-2">
            <label htmlFor="filter-date" className="text-sm text-white/50">
              Date
            </label>
            <input
              id="filter-date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bw-input w-auto [color-scheme:dark]"
            />
            {selectedDate && (
              <button type="button" className="bw-btn-sm" onClick={() => setSelectedDate("")}>
                Clear
              </button>
            )}
          </div>
        }
      />

      {filteredContacts.length === 0 ? (
        <EmptyState title="No leads found" description={selectedDate ? "No leads on this date." : "New enquiries from the website will show up here."} />
      ) : (
        <>
          {selectedLeads.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm">
              <span className="text-red-100">{selectedLeads.length} lead(s) selected</span>
              <button onClick={handleBulkDelete} className="bw-btn-primary bg-red-600 hover:bg-red-700">
                <Trash2 size={15} /> Delete selected
              </button>
            </div>
          )}

          <Panel bodyClassName="">
            <div className={table.wrap}>
              <table className={`${table.table} min-w-[760px]`}>
                <thead className={table.thead}>
                  <tr>
                    <th className={`${table.th} w-10`}>
                      <input
                        type="checkbox"
                        aria-label="Select all on this page"
                        className="accent-[#54acbf]"
                        checked={allOnPageSelected}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLeads(currentContacts.map((lead) => lead._id));
                          } else {
                            setSelectedLeads([]);
                          }
                        }}
                      />
                    </th>
                    <th className={table.th}>Name</th>
                    <th className={table.th}>Email</th>
                    <th className={table.th}>Phone</th>
                    <th className={table.th}>Received</th>
                    <th className={`${table.th} text-right`}>Actions</th>
                  </tr>
                </thead>

                <tbody className={table.tbody}>
                  {currentContacts.map((contact) => {
                    const checked = selectedLeads.includes(contact._id);
                    return (
                      <tr key={contact._id} className={`${table.tr} ${checked ? "bg-[#26658c]/15" : ""}`}>
                        <td className={table.td}>
                          <input
                            type="checkbox"
                            aria-label={`Select ${contact.name}`}
                            className="accent-[#54acbf]"
                            checked={checked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedLeads((prev) => [...prev, contact._id]);
                              } else {
                                setSelectedLeads((prev) => prev.filter((id) => id !== contact._id));
                              }
                            }}
                          />
                        </td>

                        <td className={table.td}>
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26658c]/40 text-xs font-semibold uppercase text-[#a7ebf2]">
                              {contact.name?.trim()?.[0] || "?"}
                            </span>
                            <span className="font-medium text-white">{contact.name}</span>
                          </div>
                        </td>

                        <td className={table.td}>
                          <a href={`mailto:${contact.email}`} className="text-[#a7ebf2] hover:underline">
                            {contact.email}
                          </a>
                        </td>

                        <td className={`${table.td} whitespace-nowrap`}>
                          <a href={`tel:${contact.phone}`} className="hover:text-[#a7ebf2]">
                            {contact.phone}
                          </a>
                        </td>

                        <td className={`${table.td} whitespace-nowrap text-white/60`}>
                          {new Date(contact.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </td>

                        <td className={table.td}>
                          <div className="flex items-center justify-end gap-1">
                            <IconAction label="View details" onClick={() => setSelectedContact(contact)}>
                              <Eye size={16} />
                            </IconAction>
                            <IconAction
                              label="Delete lead"
                              danger
                              onClick={() => {
                                setLeadToDelete(contact._id);
                                setDeleteModal(true);
                              }}
                            >
                              <Trash2 size={16} />
                            </IconAction>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>

          <div className="mt-5">
            <Pagination page={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
          </div>
        </>
      )}

      {selectedContact && (
        <Modal
          title="Lead details"
          width={520}
          onClose={() => setSelectedContact(null)}
          footer={
            <button className="bw-btn-ghost" onClick={() => setSelectedContact(null)}>
              Close
            </button>
          }
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#26658c]/40 text-base font-semibold uppercase text-[#a7ebf2]">
              {selectedContact.name?.trim()?.[0] || "?"}
            </span>
            <div>
              <p className="font-semibold text-white">{selectedContact.name}</p>
              <p className="text-xs text-white/50">
                {new Date(selectedContact.createdAt).toLocaleString("en-GB")}
              </p>
            </div>
          </div>

          <dl className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-white/40" />
              <a href={`mailto:${selectedContact.email}`} className="text-[#a7ebf2] hover:underline">
                {selectedContact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-white/40" />
              <a href={`tel:${selectedContact.phone}`} className="text-white/85 hover:text-[#a7ebf2]">
                {selectedContact.phone}
              </a>
            </div>
          </dl>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">Services</p>
            <div className="flex flex-wrap gap-2">
              {selectedContact.services?.length ? (
                selectedContact.services.map((service: string, idx: number) => (
                  <Badge key={idx} tone="blue">
                    {service}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-white/40">None selected</span>
              )}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">Message</p>
            <p className="whitespace-pre-wrap rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-white/80">
              {selectedContact.message || <span className="text-white/40">No message</span>}
            </p>
          </div>
        </Modal>
      )}

      {deleteModal && (
        <Modal
          title="Delete lead"
          width={440}
          onClose={() => {
            setDeleteModal(false);
            setLeadToDelete(null);
          }}
          footer={
            <>
              <button
                onClick={() => {
                  setDeleteModal(false);
                  setLeadToDelete(null);
                }}
                className="bw-btn-ghost"
              >
                Cancel
              </button>
              <button onClick={handleDeleteLead} disabled={loadingDelete} className="bw-btn-primary bg-red-600 hover:bg-red-700">
                {loadingDelete ? "Deleting..." : "Delete lead"}
              </button>
            </>
          }
        >
          <p className="text-sm text-white/70">Are you sure you want to delete this lead? This action cannot be undone.</p>
        </Modal>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default AdminLead;
