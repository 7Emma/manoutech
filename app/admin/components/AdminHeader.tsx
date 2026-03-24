import Link from 'next/link';
import { Icons } from '@/lib/icons';
import { useEffect, useState } from 'react';
import { adminService } from '@/lib/services/admin';
import { notificationsService } from '@/lib/services/notifications';

interface AdminHeaderProps {
  label: string;
  totalBadge: number;
}

export default function AdminHeader({ label, totalBadge }: AdminHeaderProps) {
  const [notifBadge, setNotifBadge] = useState<number>(totalBadge);

  useEffect(() => {
    (async () => {
      try {
        const res = await adminService.dashboard();
        const direct = res.data.notifications?.unread ?? res.data.unreadMessages;
        setNotifBadge(direct);
      } catch {
        try {
          const { data } = await notificationsService.list(200, 0, 'unread');
          setNotifBadge(data.length);
        } catch {
          setNotifBadge(totalBadge);
        }
      }
    })();
  }, [totalBadge]);

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
          {notifBadge > 0 && (
            <span className="al-notif-badge">{notifBadge}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
