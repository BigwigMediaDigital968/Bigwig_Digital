"use client";
import { JSX, useEffect, useState } from "react";
import { FaPhoneAlt, FaBook } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const GRADIENTS = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-sky-500 via-blue-500 to-indigo-600",
];

interface LeadStat {
  date: string;
  count: number;
}
interface GARow {
  dimensionValues: { value: string }[];
  metricValues: { value: string }[];
}

interface GAStat {
  city: string;
  activeUsers: number;
}
interface TrafficSource {
  source: string;
  totalUsers: number;
  sessions: number;
  activeUsers: number;
}

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`API failed: ${url}`, res.status);
      return fallback;
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.error(`Invalid JSON from: ${url}`);
      return fallback;
    }

    return await res.json();
  } catch (error) {
    console.error(`Fetch error: ${url}`, error);
    return fallback;
  }
}

const Dashboard = () => {
  const [counts, setCounts] = useState({
    leads: 0,
    blogs: 0,
    jobApplications: 0,
  });

  const [leadGraphData, setLeadGraphData] = useState<LeadStat[]>([]);
  const [gaGraphData, setGaGraphData] = useState<GAStat[]>([]);
  const [trafficSources, setTrafficSources] = useState<TrafficSource[]>([]);

  // useEffect(() => {
  //   Promise.all([
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`).then((r) =>
  //       r.json(),
  //     ),
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`).then((r) =>
  //       r.json(),
  //     ),
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`).then((r) =>
  //       r.json(),
  //     ),
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/last10days`).then(
  //       (r) => r.json(),
  //     ),
  //     fetch(
  //       `${process.env.NEXT_PUBLIC_API_BASE}/api/google/analytics-data`,
  //     ).then((r) => r.json()),
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/google/summary-data`).then(
  //       (r) => r.json(),
  //     ),
  //   ])
  //     .then(
  //       ([leads, blogs, jobApplications, leadStats, gaStats, summaryStats]) => {
  //         setCounts({
  //           leads: Array.isArray(leads) ? leads.length : 0,
  //           blogs: Array.isArray(blogs) ? blogs.length : 0,
  //           jobApplications: Array.isArray(jobApplications)
  //             ? jobApplications.length
  //             : 0,
  //         });

  //         if (Array.isArray(leadStats)) {
  //           setLeadGraphData(leadStats);
  //         }

  //         if (Array.isArray(gaStats?.rows)) {
  //           const formatted: GAStat[] = gaStats.rows.map((row: GARow) => ({
  //             city: row.dimensionValues[0]?.value || "Unknown",
  //             activeUsers: parseInt(row.metricValues[0]?.value || "0", 10),
  //           }));
  //           setGaGraphData(formatted);
  //         }

  //         if (Array.isArray(summaryStats?.rows)) {
  //           const formattedSources: TrafficSource[] = summaryStats.rows.map(
  //             (row: GARow) => ({
  //               source: row.dimensionValues[0]?.value || "Unknown",
  //               totalUsers: parseInt(row.metricValues[0]?.value || "0", 10),
  //               sessions: parseInt(row.metricValues[1]?.value || "0", 10),
  //               activeUsers: parseInt(row.metricValues[2]?.value || "0", 10),
  //             }),
  //           );
  //           setTrafficSources(formattedSources);
  //         }
  //       },
  //     )
  //     .catch((error) => {
  //       console.error("Error loading dashboard data:", error);
  //     });
  // }, []);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [
          leads,
          blogs,
          jobApplications,
          leadStats,
          gaStats,
          summaryStats,
        ] = await Promise.all([
          safeFetch<any[]>(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`,
            [],
          ),
          safeFetch<any[]>(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`, []),
          safeFetch<any[]>(`${process.env.NEXT_PUBLIC_API_BASE}/api/jobs`, []),
          safeFetch<LeadStat[]>(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/last10days`,
            [],
          ),
          safeFetch<any>(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/google/analytics-data`,
            {},
          ),
          safeFetch<any>(
            `${process.env.NEXT_PUBLIC_API_BASE}/api/google/summary-data`,
            {},
          ),
        ]);

        setCounts({
          leads: leads.length,
          blogs: blogs.length,
          jobApplications: jobApplications.length,
        });

        setLeadGraphData(leadStats);

        if (Array.isArray(gaStats?.rows)) {
          setGaGraphData(
            gaStats.rows.map((row: GARow) => ({
              city: row.dimensionValues?.[0]?.value || "Unknown",
              activeUsers: parseInt(row.metricValues?.[0]?.value || "0", 10),
            })),
          );
        }

        if (Array.isArray(summaryStats?.rows)) {
          setTrafficSources(
            summaryStats.rows.map((row: GARow) => ({
              source: row.dimensionValues?.[0]?.value || "Unknown",
              totalUsers: parseInt(row.metricValues?.[0]?.value || "0", 10),
              sessions: parseInt(row.metricValues?.[1]?.value || "0", 10),
              activeUsers: parseInt(row.metricValues?.[2]?.value || "0", 10),
            })),
          );
        }
      } catch (err) {
        console.error("Dashboard load error:", err);
      }
    };

    loadDashboard();
  }, []);

  console.log(counts);

  const cards = [
    { title: "Leads", icon: <FaPhoneAlt />, count: counts.leads },
    { title: "Blogs Data", icon: <FaBook />, count: counts.blogs },
    {
      title: "Job Application Data",
      icon: <FaBook />,
      count: counts.jobApplications,
    },
  ];

  return (
    <section className="px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <StatCard
            key={card.title}
            {...card}
            gradient={GRADIENTS[idx % GRADIENTS.length]}
          />
        ))}
      </div>

      {/* Leads Graph */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Leads in Last 10 Days
        </h3>
        {leadGraphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={leadGraphData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No data to display.</p>
        )}
      </div>

      {/* Traffic Source Breakdown - Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Google Analytics - Traffic Source Breakdown
        </h3>

        {trafficSources.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficSources}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="totalUsers" fill="#6366f1" name="Total Users" />
              <Bar dataKey="sessions" fill="#10b981" name="Sessions" />
              <Bar dataKey="activeUsers" fill="#f59e0b" name="Active Users" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No traffic data found.</p>
        )}

        {/* Traffic Source Table */}
        <div className="overflow-x-auto text-black">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">Traffic Source</th>
                <th className="px-4 py-3 border-b">Total Users</th>
                <th className="px-4 py-3 border-b">Sessions</th>
                <th className="px-4 py-3 border-b">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {trafficSources.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{row.source}</td>
                  <td className="px-4 py-2">{row.totalUsers}</td>
                  <td className="px-4 py-2">{row.sessions}</td>
                  <td className="px-4 py-2">{row.activeUsers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Google Analytics Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Google Analytics - Active Users by City
        </h3>
        {gaGraphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gaGraphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="activeUsers" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No analytics data found.</p>
        )}

        {/* Detailed Table */}
        <div className="overflow-x-auto text-black">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">City</th>
                <th className="px-4 py-3 border-b">Active Users</th>
              </tr>
            </thead>
            <tbody>
              {gaGraphData.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{row.city || "Unknown"}</td>
                  <td className="px-4 py-2">{row.activeUsers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  title,
  icon,
  count,
  gradient,
}: {
  title: string;
  icon: JSX.Element;
  count: number;
  gradient: string;
}) => (
  <div
    className={`w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white bg-gradient-to-br ${gradient}`}
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
    <p className="text-3xl font-bold">{count}</p>
  </div>
);

export default Dashboard;
