import Link from 'next/link';
import { Icons } from '@/lib/icons';

interface AdminHeaderProps {
  label: string;
  totalBadge: number;
}

export default function AdminHeader({ label, totalBadge }: AdminHeaderProps) {
  return (
    <header className="al-header">
      <div className="al-header-left">
        <div className="al-breadcrumb">
          <span>Admin</span>
          <span className="al-breadcrumb-sep">›</span>
          <span className="al-breadcrumb-cur">{label}</span>
        </div>
      </div>
      <div className="al-header-right">
        <div className="al-header-chip">
          <span className="al-live-dot" />
          Session active
        </div>
        <Link href="/admin/notifications" className="al-notif-btn">
          {Icons.bell}
          {totalBadge > 0 && (
            <span className="al-notif-badge">{totalBadge}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
