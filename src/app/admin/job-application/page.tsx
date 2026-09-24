"use client";
import { useEffect, useState } from "react";
import { Badge, EmptyState, PageHeader, Pagination, Panel, table } from "../../../../components/admin/AdminUI";

const ITEMS_PER_PAGE = 20;

interface JobApplication {
  _id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  experience: string;
  cctc: string;
  ectc: string;
  noticePeriod: string;
  coverLetter: string;
  createdAt: string;
}

const JobApplication = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<
    JobApplication[]
  >([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: JobApplication, b: JobApplication) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setApplications(sorted);
        console.log(applications);
        setFilteredApplications(sorted);
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredApplications(applications);
      setCurrentPage(1);
      return;
    }
    const filtered = applications.filter((a) =>
      new Date(a.createdAt).toISOString().startsWith(selectedDate)
    );
    setFilteredApplications(filtered);
    setCurrentPage(1);
  }, [selectedDate, applications]);

  const totalPages = Math.ceil(filteredApplications.length / ITEMS_PER_PAGE);
  const currentApplications = filteredApplications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <PageHeader
        title="Job Applications"
        description={`${filteredApplications.length} ${selectedDate ? "on selected date" : "total"} · newest first`}
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

      {filteredApplications.length === 0 ? (
        <EmptyState
          title="No applications found"
          description={selectedDate ? "No applications on this date." : "Applications from the careers page will show up here."}
        />
      ) : (
        <>
          <Panel bodyClassName="">
            <div className={table.wrap}>
              <table className={`${table.table} min-w-[980px]`}>
                <thead className={table.thead}>
                  <tr>
                    <th className={table.th}>Candidate</th>
                    <th className={table.th}>Phone</th>
                    <th className={table.th}>Experience</th>
                    <th className={table.th}>Current CTC</th>
                    <th className={table.th}>Expected CTC</th>
                    <th className={table.th}>Notice</th>
                    <th className={table.th}>Applied</th>
                  </tr>
                </thead>
                <tbody className={table.tbody}>
                  {currentApplications.map((app) => (
                    <tr key={app._id} className={table.tr}>
                      <td className={table.td}>
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26658c]/40 text-xs font-semibold uppercase text-[#a7ebf2]">
                            {app.fullName?.trim()?.[0] || "?"}
                          </span>
                          <div className="min-w-0">
                            <p className="font-medium text-white">{app.fullName}</p>
                            <a href={`mailto:${app.email}`} className="text-xs text-[#a7ebf2] hover:underline">
                              {app.email}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className={`${table.td} whitespace-nowrap`}>
                        <a href={`tel:${app.mobileNumber}`} className="hover:text-[#a7ebf2]">
                          {app.mobileNumber}
                        </a>
                      </td>
                      <td className={table.td}>{app.experience}</td>
                      <td className={`${table.td} tabular-nums`}>{app.cctc}</td>
                      <td className={`${table.td} tabular-nums`}>{app.ectc}</td>
                      <td className={table.td}>
                        <Badge tone="gray">{app.noticePeriod}</Badge>
                      </td>
                      <td className={`${table.td} whitespace-nowrap text-white/60`}>
                        {new Date(app.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <div className="mt-5">
            <Pagination page={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
          </div>
        </>
      )}
    </div>
  );
};

export default JobApplication;
