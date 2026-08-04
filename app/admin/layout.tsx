"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Bell,
  Search,
  Lock
} from "lucide-react";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Simple local auth check
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid password. Hint: admin123");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    router.push("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
          <div className="flex justify-center mb-8">
            <Image 
              src="/pharma/assets/images/696f65db8cb34.png" 
              alt="Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-brand-900 mb-2">Admin Portal</h2>
          <p className="text-center text-slate-500 mb-8">Please sign in to continue.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none"
                  placeholder="Enter password..."
                  required
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-900 text-white font-bold py-3 rounded-xl hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Secure Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Products", icon: Package, href: "/admin/products" },
    { name: "Inquiries", icon: MessageSquare, href: "/admin/inquiries" },
    { name: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900">
      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-brand-950 text-slate-300 transition-transform duration-300 transform flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
          <Link href="/admin" className={`flex items-center gap-3 transition-opacity ${!sidebarOpen && 'lg:hidden'}`}>
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${
                  isActive 
                    ? "bg-brand-500 text-white" 
                    : "hover:bg-white/5 hover:text-white"
                }`}
                title={item.name}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-brand-400 group-hover:text-brand-300"}`} />
                <span className={`font-medium ${!sidebarOpen && 'lg:hidden'}`}>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10 shrink-0">
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors group ${
              !sidebarOpen ? 'lg:justify-center' : ''
            }`}
            title="Logout"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className={`font-medium ${!sidebarOpen && 'lg:hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 shrink-0 flex items-center justify-between px-6 lg:px-10 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-500 hover:text-brand-900 transition-colors p-2 rounded-lg hover:bg-slate-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm w-48 lg:w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-brand-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="w-10 h-10 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold">
                AD
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-slate-900">Admin User</p>
                <p className="text-xs text-slate-500">Superadmin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-brand-950/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
