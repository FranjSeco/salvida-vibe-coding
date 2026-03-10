import { Calendar, LayoutDashboard, LogOut, Settings, User, Users, Zap } from '../../ui/icons';
import React from 'react';
import { NavLink } from '../../router';
import { useTranslation } from '../../i18n';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const { t } = useTranslation();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: t.nav.dashboard },
    { to: '/prms', icon: Users, label: t.nav.prms },
    { to: '/bookings', icon: Calendar, label: t.nav.bookings },
    { to: '/settings', icon: Settings, label: t.nav.settings },
  ];

  return (
    <aside
      id="sidebar"
      className={`
        w-64 border-r border-primary/10 flex flex-col bg-white
        fixed lg:relative inset-y-0 left-0 z-50
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      {/* Logo */}
      <div className="p-8 flex items-center gap-3">
        <div className="text-primary bg-primary/10 p-2 rounded-xl">
          <Zap size={28} fill="currentColor" />
        </div>
        <h2 className="text-primary text-2xl font-bold tracking-tight">{t.app.name}</h2>
      </div>

      {/* Navigation */}
      <nav id="sidebar-nav" className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
              ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-600 hover:bg-primary/5 hover:text-primary'
              }
            `}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Alex Johnson</p>
              <p className="text-xs text-slate-500">{t.user.admin}</p>
            </div>
          </div>
          <button
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title={t.user.logout}
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};
