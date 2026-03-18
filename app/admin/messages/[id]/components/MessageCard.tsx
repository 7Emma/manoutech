"use client";

import { Icons } from "@/lib/icons";
import { Message } from "@/types/message";
import { formatDateShort, formatTime } from "@/lib/utils";

interface MessageCardProps {
  message: Message;
  reply: string;
  onReplyChange: (value: string) => void;
  onReply: () => void;
  onMarkRead: () => void;
  onDelete: () => void;
}

export function MessageCard({
  message,
  reply,
  onReplyChange,
  onReply,
  onMarkRead,
  onDelete,
}: MessageCardProps) {
  return (
    <div>
      <div className="md-card" style={{ marginBottom: 14 }}>
        {/* Sender */}
        <div className="md-sender">
          <div className="md-sender-av">{message.name[0]}</div>
          <div>
            <div className="md-sender-name">{message.name}</div>
            <a href={`mailto:${message.email}`} className="md-sender-email">
              {message.email}
            </a>
            {message.company && (
              <div className="md-sender-company">
                {message.company.toUpperCase()}
              </div>
            )}
          </div>
          <div className="md-sender-right">
            <div className="md-sender-date">
              {formatDateShort(message.created_at)}
            </div>
            <div className="md-sender-date-full">
              {formatTime(message.created_at)}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="md-msg-body">
          <div className="md-msg-label">Message</div>
          <div className="md-msg-text">{message.message}</div>
        </div>

        {/* Reply */}
        <div className="md-reply">
          <div className="md-reply-label">Répondre</div>
          <textarea
            className="md-reply-area"
            placeholder={`Votre réponse à ${message.name}…`}
            value={reply}
            onChange={(e) => onReplyChange(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="md-actions">
          <button
            className="md-btn-primary"
            onClick={onReply}
            disabled={!reply.trim()}
            style={{ opacity: reply.trim() ? 1 : 0.45 }}
          >
            {Icons.check} Envoyer la réponse
          </button>
          <a
            href={`mailto:${message.email}?subject=Re: ${message.subject}`}
            className="md-btn-ghost"
            style={{ textDecoration: "none" }}
          >
            {Icons.externalLink} Ouvrir dans Mail
          </a>
          <button
            className="md-btn-ghost"
            onClick={onMarkRead}
            style={{ display: !message.read ? "inline-flex" : "none" }}
          >
            {Icons.checkCircle} Marquer lu
          </button>
          <button className="md-btn-danger" onClick={onDelete}>
            {Icons.trash} Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
