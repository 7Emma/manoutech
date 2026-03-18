import Link from "next/link";
import { Icons } from "@/lib/icons";

export function DeletedState() {
  return (
    <div
      className="md-root"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: "rgba(78,201,176,.1)",
            border: "1px solid rgba(78,201,176,.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            color: "#4ec9b0",
          }}
        >
          {Icons.check}
        </div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: "#f0f4ff",
          }}
        >
          Message supprimé
        </div>
        <Link href="/admin/messages" className="md-back" style={{ color: "#4da6ff" }}>
          ← Retour aux messages
        </Link>
      </div>
    </div>
  );
}
