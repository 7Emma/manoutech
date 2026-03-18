import { Icons } from "@/lib/icons";
import { Message } from "@/types/message";

interface DeleteModalProps {
  message: Message;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteModal({
  message,
  isOpen,
  onConfirm,
  onCancel,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="md-overlay" onClick={onCancel}>
      <div className="md-modal" onClick={(e) => e.stopPropagation()}>
        <div className="md-modal-icon" style={{ fontSize: '32px', color: '#dc2626' }}>{Icons.trash}</div>
        <div className="md-modal-h">Supprimer ce message ?</div>
        <p className="md-modal-sub">
          Le message de <strong style={{ color: "#e0eaff" }}>{message.name}</strong> sera
          définitivement supprimé. Cette action est irréversible.
        </p>
        <div className="md-modal-btns">
          <button className="md-modal-cancel" onClick={onCancel}>
            Annuler
          </button>
          <button className="md-modal-del" onClick={onConfirm}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
