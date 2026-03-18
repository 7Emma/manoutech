"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "./layout-mock-data";
import { AdminSidebar, AdminHeader } from "./components";

// Styles
import "@/styles/admin/layout/root.css";
import "@/styles/admin/layout/sidebar.css";
import "@/styles/admin/layout/main.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/session");
        if (!res.ok) {
          router.push("/admin/login");
        } else {
          setIsAuth(true);
        }
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };
    
    if (pathname !== "/admin/login") {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  // Map pathname to active nav item
  const getActiveFromPath = (path: string) => {
    if (path === "/admin") return "dashboard";
    if (path.includes("/messages")) return "messages";
    if (path.includes("/newsletter")) return "newsletter";
    if (path.includes("/blog")) return "blog";
    if (path.includes("/settings")) return "settings";
    return "dashboard";
  };

  const active = getActiveFromPath(pathname);
  const current = navItems.find((n) => n.id === active);
  const totalBadge = navItems.reduce((a, n) => a + (n.badge || 0), 0);

  // Don't show layout on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (loading) return <div style={{ padding: '40px' }}>Vérification de l'authentification...</div>;
  if (!isAuth) return null;

  return (
    <>
      <div className="al-root">
        <div className="al-bg-grid" />

        {/* ══ SIDEBAR ══ */}
        <AdminSidebar
          collapsed={collapsed}
          onCollapse={setCollapsed}
          active={active}
          totalBadge={totalBadge}
        />

        {/* ══ MAIN ══ */}
        <div className="al-main">
          <AdminHeader label={current?.label || "Admin"} totalBadge={totalBadge} />

          <main className="al-content">{children}</main>
        </div>
      </div>
    </>
  );
}
