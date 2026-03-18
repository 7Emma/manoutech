"use client";

import { Icons } from "@/lib/icons";
import { Message } from "@/types/message";
import { formatDate } from "@/lib/utils";

interface SidebarProps {
  message: Message;
  read: boolean;
  archived: boolean;
  onArchive: () => void;
}

export function Sidebar({
  message,
  read,
  archived,
  onArchive,
}: SidebarProps) {
  return (
    <div className="md-sidebar">
      {/* Status */}
      <div className="md-side-card">
        <div className="md-side-header">Statut</div>
        <div className="md-side-body">
          <div className="md-status-row">
            <span className="md-status-key">Lu</span>
            <span className={`md-status-val ${read ? "md-sv-yes" : "md-sv-no"}`}>
              <span className="md-status-dot" />
              {read ? "Oui" : "Non lu"}
            </span>
          </div>
          <div className="md-status-row">
            <span className="md-status-key">Archivé</span>
            <span
              className={`md-status-val ${
                archived ? "md-sv-arch" : "md-sv-no"
              }`}
            >
              <span className="md-status-dot" />
              {archived ? "Archivé" : "Actif"}
            </span>
          </div>
          <button
            className={`md-archive-btn ${archived ? "active" : ""}`}
            onClick={onArchive}
          >
            {archived ? `${Icons.download} Désarchiver` : `${Icons.archive} Archiver`}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="md-side-card">
        <div className="md-side-header">Informations</div>
        <div className="md-side-body">
          {[
            { key: "Expéditeur", val: message.name },
            { key: "Email", val: message.email, email: true },
            { key: "Entreprise", val: message.company || "—" },
            { key: "Service", val: message.service || "—" },
            { key: "Budget", val: message.budget || "—" },
            { key: "Reçu le", val: formatDate(message.created_at) },
          ].map((r) => (
            <div key={r.key} className="md-info-row">
              <span className="md-info-key">{r.key}</span>
              {(r as any).email ? (
                <a
                  href={`mailto:${r.val}`}
                  className="md-info-val"
                  style={{ color: "#4da6ff", textDecoration: "none" }}
                >
                  {r.val}
                </a>
              ) : (
                <span className="md-info-val">{r.val}</span>
              )}
            </div>
          ))}
          <div className="md-info-row">
            <span className="md-info-key">ID</span>
            <span className="md-info-mono">{message.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
