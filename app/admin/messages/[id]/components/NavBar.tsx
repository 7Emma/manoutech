import { Message, MessageNavigation } from "@/types/message";
import Link from "next/link";

interface NavBarProps {
  message: Message;
  navigation: MessageNavigation;
}

export function NavBar({ message, navigation }: NavBarProps) {
  return (
    <div className="md-navbar">
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Link href="/admin/messages" className="md-back">
          ← Retour aux messages
        </Link>
        <div className="md-breadcrumb">
          <span>Admin</span>
          <span className="md-breadcrumb-sep">›</span>
          <span>Messages</span>
          <span className="md-breadcrumb-sep">›</span>
          <span className="md-breadcrumb-cur">{message.name}</span>
        </div>
      </div>
      <div className="md-nav-arrows">
        <button className="md-arrow-btn">
          ← <span className="md-arrow-name">{navigation.prev.name}</span>
        </button>
        <button className="md-arrow-btn">
          <span className="md-arrow-name">{navigation.next.name}</span> →
        </button>
      </div>
    </div>
  );
}
