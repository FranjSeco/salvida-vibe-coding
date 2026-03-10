import { Bell, Calendar, Menu } from '../../ui/icons';
import React from 'react';
import { useLocation } from '../../router';
import { useTranslation } from '../../i18n';
import { getCurrentMonthYear } from '../../utils/formatters/index';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const pageData: Record<string, { title: string; description: string }> = {
    '/': { title: t.dashboard.overview, description: t.dashboard.subtitle },
    '/prms': { title: t.nav.prms, description: t.prms.description },
    '/bookings': { title: t.bookings.title, description: t.bookings.description },
    '/settings': { title: t.settings.title, description: t.settings.description },
  };

  const page = pageData[location.pathname] || { title: t.app.name, description: '' };

  return (
    <header
      id="main-header"
      className="h-20 border-b border-primary/10 flex items-center justify-between px-10 bg-white/80 backdrop-blur-md sticky top-0 z-10"
    >
      <div className="flex items-center gap-4">
        <button
          id="mobile-menu-btn"
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors"
        >
          <Menu size={24} className="text-slate-600" />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{page.title}</h1>
          <p className="text-sm text-slate-500">{page.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          id="notifications-btn"
          className="p-2 rounded-full hover:bg-primary/10 text-slate-600 transition-colors relative"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-primary/10 mx-2"></div>
        <div
          id="current-month-display"
          className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Calendar size={16} className="text-primary" />
          <span className="text-sm font-semibold text-primary">{getCurrentMonthYear()}</span>
        </div>
      </div>
    </header>
  );
};
