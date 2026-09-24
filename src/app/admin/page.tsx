"use client";
import { useEffect, useState } from "react";
import { Briefcase, NotebookPen, Users } from "lucide-react";
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
import { EmptyState, PageHeader, Panel, StatCard } from "../../../components/admin/AdminUI";

/* Chart styling for the dark admin surface (#0d1726). Series colours are the
   validated dark categorical steps: blue, orange, aqua (fixed order). */
const SERIES = ["#3987e5", "#d95926", "#199e70"];
const AXIS = { stroke: "rgba(255,255,255,0.15)", tick: { fill: "rgba(255,255,255,0.55)", fontSize: 12 }, tickLine: false };
const GRID = { stroke: "rgba(255,255,255,0.07)", vertical: false };
const TOOLTIP = {
  contentStyle: {
    background: "#101c2c",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
  },
  labelStyle: { color: "rgba(255,255,255,0.7)", marginBottom: 4 },
  itemStyle: { color: "#fff" },
  cursor: { fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.2)" },
};

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
    { label: "Total leads", icon: <Users size={18} />, value: counts.leads },
    { label: "Published blogs", icon: <NotebookPen size={18} />, value: counts.blogs },
    // Counts /api/jobs, i.e. job vacancy posts.
    { label: "Job vacancies", icon: <Briefcase size={18} />, value: counts.jobApplications },
  ];

  return (
    <section>
      <PageHeader title="Dashboard" description="Overview of leads, content and website traffic." />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      <Panel title="Leads in the last 10 days" className="mb-6">
        {leadGraphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={leadGraphData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
              <CartesianGrid {...GRID} />
              <XAxis dataKey="date" {...AXIS} />
              <YAxis allowDecimals={false} {...AXIS} />
              <Tooltip {...TOOLTIP} />
              <Line
                type="monotone"
                dataKey="count"
                name="Leads"
                stroke={SERIES[0]}
                strokeWidth={2}
                dot={{ r: 4, fill: SERIES[0], stroke: "#0d1726", strokeWidth: 2 }}
                activeDot={{ r: 6, stroke: "#0d1726", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <EmptyState title="No lead data yet" description="Leads from the last 10 days will appear here." />
        )}
      </Panel>

      <div className="space-y-10">
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
      </div>
    </section>
  );
};

export default Dashboard;
