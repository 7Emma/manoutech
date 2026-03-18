import { Message } from "@/types/message";
import { formatDate } from "@/lib/utils";

interface TitleBlockProps {
  message: Message;
  read: boolean;
}

export function TitleBlock({ message, read }: TitleBlockProps) {
  return (
    <div className="md-title-block">
      <h1 className="md-subject">{message.subject}</h1>
      <div className="md-meta-row">
        <span className="md-meta-pill">
          <span className="md-meta-dot" />
          {formatDate(message.created_at)}
        </span>
        {message.company && (
          <span className="md-meta-pill">🏢 {message.company}</span>
        )}
        {message.service && (
          <span className="md-meta-pill">⬡ {message.service}</span>
        )}
        {message.budget && (
          <span className="md-meta-pill">💰 {message.budget}</span>
        )}
        {!read && (
          <span className="md-unread-badge">
            <span className="md-unread-dot" />
            Non lu
          </span>
        )}
      </div>
    </div>
  );
}
