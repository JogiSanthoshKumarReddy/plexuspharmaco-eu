"use client";
import { useState } from "react";
import { Search, Filter, Eye } from "lucide-react";

const mockInquiries = [
  { id: "INQ-001", name: "Dr. Sarah Jenkins", company: "BioHealth Ltd", type: "Partnership", status: "New", date: "2024-03-15", email: "sarah@biohealth.com" },
  { id: "INQ-002", name: "Markus Weber", company: "TechBio GmbH", type: "Contract Manufacturing", status: "In Progress", date: "2024-03-14", email: "weber@techbio.de" },
  { id: "INQ-003", name: "Elena Rossi", company: "PharmaItalia", type: "Distribution", status: "Resolved", date: "2024-03-10", email: "elena@pharmaitalia.it" },
  { id: "INQ-004", name: "Dr. James Chen", company: "MediCorp", type: "General Inquiry", status: "New", date: "2024-03-15", email: "j.chen@medicorp.com" },
  { id: "INQ-005", name: "Sophie Martin", company: "Independent", type: "Career", status: "In Progress", date: "2024-03-13", email: "smartin99@gmail.com" },
];

export default function AdminInquiriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = mockInquiries.filter(i => 
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-brand-900">Inquiries Inbox</h1>
        <p className="text-slate-500 mt-1">Manage and respond to website contact form submissions.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 font-medium text-sm w-full sm:w-auto justify-center transition-colors">
            <Filter className="w-4 h-4" /> Filter By Status
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold">ID / Date</th>
                <th className="p-4 font-bold">Contact Details</th>
                <th className="p-4 font-bold">Type</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((inq, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900">{inq.id}</div>
                    <div className="text-xs text-slate-500 mt-1">{inq.date}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-slate-900">{inq.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{inq.company}</div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {inq.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      inq.status === 'New' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      inq.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {inq.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 text-brand-700 hover:bg-brand-100 hover:text-brand-900 font-medium text-sm rounded-lg transition-colors">
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
