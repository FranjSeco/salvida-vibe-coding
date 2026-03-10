import React, { useState } from 'react';
import { Outlet } from '../../router';
import { Header, Sidebar } from './index';

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </div>

        <footer className="p-4 text-center text-slate-400 text-xs flex-shrink-0 border-t border-primary/5">
          <p>© 2024 Salvida Management Portal</p>
        </footer>
      </main>
    </div>
  );
};
