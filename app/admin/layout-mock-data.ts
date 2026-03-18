export const MOCK_STATS = {
  messages: { count: 7, badge: 3 },
  newsletter: { count: 12, badge: 0 },
  blog: { count: 5, badge: 2 },
};

export const navItems = [
  { id: "dashboard", href: "/admin", icon: "◈", label: "Dashboard", badge: null },
  { id: "messages", href: "/admin/messages", icon: "◉", label: "Messages", badge: 3 },
  {
    id: "newsletter",
    href: "/admin/newsletter",
    icon: "⬡",
    label: "Newsletter",
    badge: null,
  },
  { id: "blog", href: "/admin/blog", icon: "▲", label: "Blog", badge: 2 },
  { id: "settings", href: "/admin/settings", icon: "⚙", label: "Settings", badge: null },
];
