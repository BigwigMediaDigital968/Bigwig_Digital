"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="sticky top-0 z-20 bg-black p-4 sm:p-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Leads</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="filter-date" className="text-sm text-gray-400">
            Filter by Date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {filteredContacts.length === 0 ? (
          <p className="text-gray-400">No Leads found.</p>
        ) : (
          <div className="overflow-x-auto">
            {selectedLeads.length > 0 && (
              <div className="mb-4 flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                <span>{selectedLeads.length} lead(s) selected</span>

                <button
                  onClick={handleBulkDelete}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 cursor-pointer"
                >
                  Delete Selected
                </button>
              </div>
            )}
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">
                    <input
                      type="checkbox"
                      checked={
                        currentContacts.length > 0 &&
                        currentContacts.every((lead) =>
                          selectedLeads.includes(lead._id),
                        )
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLeads(
                            currentContacts.map((lead) => lead._id),
                          );
                        } else {
                          setSelectedLeads([]);
                        }
                      }}
                    />
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>

                  <th className="px-4 py-3 border-b border-gray-700">
                    Requested At
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentContacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedLeads.includes(contact._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLeads((prev) => [...prev, contact._id]);
                          } else {
                            setSelectedLeads((prev) =>
                              prev.filter((id) => id !== contact._id),
                            );
                          }
                        }}
                      />
                    </td>

                    <td className="px-4 py-3 font-medium">{contact.name}</td>

                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </td>

                    <td className="px-4 py-3">
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-cyan-400"
                      >
                        {contact.phone}
                      </a>
                    </td>

                    <td className="px-4 py-3">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="rounded-lg bg-cyan-600 px-3 py-1 text-sm text-white hover:bg-cyan-700 cursor-pointer"
                        >
                          View
                        </button>

                        <button
                          onClick={() => {
                            setLeadToDelete(contact._id);
                            setDeleteModal(true);
                          }}
                          className="rounded-lg bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-lg rounded-xl bg-[#111] p-6 text-white">
              <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>

              <div className="space-y-3">
                <p>
                  <strong>Name:</strong> {selectedContact.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedContact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedContact.phone}
                </p>

                <div>
                  <strong>Services:</strong>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedContact.services?.map(
                      (service: string, idx: number) => (
                        <span
                          key={idx}
                          className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs text-cyan-400"
                        >
                          {service}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <strong>Message:</strong>
                  <p className="mt-2 rounded-lg bg-[#1a1a1a] p-3 text-gray-300">
                    {selectedContact.message}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedContact(null)}
                className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {deleteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-[#111] p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white">Delete Lead</h3>

              <p className="mt-3 text-gray-400">
                Are you sure you want to delete this lead? This action cannot be
                undone.
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setDeleteModal(false);
                    setLeadToDelete(null);
                  }}
                  className="rounded-lg border border-gray-700 px-4 py-2 text-gray-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDeleteLead}
                  disabled={loadingDelete}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50 cursor-pointer"
                >
                  {loadingDelete ? "Deleting..." : "Delete Lead"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>

              {currentPage > 2 && (
                <>
                  <span className="px-2">1</span>
                  {currentPage > 3 && <span className="px-1">...</span>}
                </>
              )}

              {currentPage > 1 && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
              )}

              <span className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">
                {currentPage}
              </span>

              {currentPage < totalPages && (
                <button
                  className="px-2 py-1 text-gray-300"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && (
                    <span className="px-1">...</span>
                  )}
                  <span className="px-2">{totalPages}</span>
                </>
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLead;
