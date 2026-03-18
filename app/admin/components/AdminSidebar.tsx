"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { navItems } from "../layout-mock-data";

interface AdminSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  active: string;
  totalBadge: number;
}

// Map nav item IDs to actual routes
const navRoutes: Record<string, string> = {
  dashboard: "/admin",
  messages: "/admin/messages",
  newsletter: "/admin/newsletter",
  blog: "/admin/blog",
  settings: "/admin/settings",
};

export default function AdminSidebar({
  collapsed,
  onCollapse,
  active,
  totalBadge,
}: AdminSidebarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <aside className={`al-sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="al-collapse-btn"
        onClick={() => onCollapse(!collapsed)}
      >
        ◀
      </button>

      {/* Brand */}
      <div className="al-brand">
        <div className="al-brand-mark">
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="4" fill="white" opacity=".95" />
            <path
              d="M11 2v4M11 16v4M2 11h4M16 11h4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4.9 4.9l2.9 2.9M14.2 14.2l2.9 2.9M17.1 4.9l-2.9 2.9M7.8 14.2l-2.9 2.9"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity=".5"
            />
          </svg>
        </div>
        <div className="al-brand-text">
          <div className="al-brand-name">
            Manou<span>Tech</span>
          </div>
          <div className="al-brand-sub">Admin Panel</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="al-nav">
        <div className="al-nav-section">Navigation</div>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={navRoutes[item.id] || "/admin"}
            className={`al-nav-item ${active === item.id ? "active" : ""}`}
          >
            <div className="al-nav-icon">{item.icon}</div>
            <span className="al-nav-label">{item.label}</span>
            {item.badge && <span className="al-nav-badge">{item.badge}</span>}
            {item.badge && <span className="al-nav-badge-dot" />}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="al-bottom">
        <div className="al-user">
          <div className="al-user-av">A</div>
          <div className="al-user-info">
            <div className="al-user-name">Admin</div>
            <div className="al-user-role">SUPER ADMIN</div>
          </div>
        </div>
        <button className="al-logout" onClick={handleLogout}>
          <div className="al-logout-icon">{Icons.logOut}</div>
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
