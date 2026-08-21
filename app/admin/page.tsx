
"use client";

import { motion } from "framer-motion";
import { Users, FileText, Activity, Package, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', visitors: 4000, inquiries: 24 },
  { name: 'Tue', visitors: 3000, inquiries: 18 },
  { name: 'Wed', visitors: 5000, inquiries: 32 },
  { name: 'Thu', visitors: 2780, inquiries: 15 },
  { name: 'Fri', visitors: 6890, inquiries: 45 },
  { name: 'Sat', visitors: 2390, inquiries: 12 },
  { name: 'Sun', visitors: 3490, inquiries: 20 },
];

export default function AdminDashboard() {
  const stats = [
    { title: "Total Products", value: "173", trend: "+12% from last month", icon: Package, positive: true },
    { title: "Active Visitors (Weekly)", value: "27,550", trend: "+8.4% from last week", icon: Users, positive: true },
    { title: "New Inquiries", value: "166", trend: "-2.1% from last month", icon: FileText, positive: false },
    { title: "Avg. Session Duration", value: "3m 45s", trend: "+15s from last month", icon: Activity, positive: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome back to the Plexuspharmaco Admin Portal.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-full ${stat.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.positive ? 'Up' : 'Down'}
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-500">{stat.title}</p>
            <p className="text-xs text-slate-400 mt-4 border-t border-slate-100 pt-3">{stat.trend}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Website Traffic (Last 7 Days)</h3>
            <button className="text-sm text-brand-600 font-medium hover:text-brand-800">View Detailed Report</button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="visitors" stroke="#1e3a8a" strokeWidth={3} fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-900 text-lg mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { title: "New Inquiry Received", desc: "Contract Manufacturing inquiry from TechBio GmbH.", time: "10 mins ago", icon: FileText, color: "text-brand-500", bg: "bg-brand-50" },
              { title: "Product Updated", desc: "Admin User updated details for 'Plexwell Junior'.", time: "2 hours ago", icon: Package, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Server Backup Completed", desc: "Daily snapshot created successfully.", time: "5 hours ago", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
              { title: "New Job Application", desc: "Regulatory Affairs Manager role.", time: "1 day ago", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50" },
            ].map((activity, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bg} ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{activity.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{activity.desc}</p>
                  <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
