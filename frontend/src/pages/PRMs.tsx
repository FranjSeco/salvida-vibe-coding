import { Mail, MoreVertical, Phone, Plus, Search, Users } from '../ui/icons';
import React from 'react';
import { useTranslation } from '../i18n';

const mockPRMs = [
  {
    id: '1',
    name: 'María García',
    email: 'maria.garcia@email.com',
    phone: '+34 612 345 678',
    bookings: 12,
    lastVisit: '2024-01-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos.r@email.com',
    phone: '+34 612 345 679',
    bookings: 8,
    lastVisit: '2024-01-10',
    status: 'active',
  },
  {
    id: '3',
    name: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    phone: '+34 612 345 680',
    bookings: 15,
    lastVisit: '2024-01-18',
    status: 'active',
  },
  {
    id: '4',
    name: 'Luis Sánchez',
    email: 'luis.s@email.com',
    phone: '+34 612 345 681',
    bookings: 3,
    lastVisit: '2023-12-20',
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Elena Pérez',
    email: 'elena.p@email.com',
    phone: '+34 612 345 682',
    bookings: 20,
    lastVisit: '2024-01-19',
    status: 'active',
  },
];

export const PRMsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={t.prmsExtended.searchPlaceholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
          <Plus size={20} />
          {t.prmsExtended.addPrm}
        </button>
      </div>

      {/* PRMs Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-primary/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary/5">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {t.prmsExtended.name}
                </th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {t.prmsExtended.contact}
                </th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {t.prmsExtended.bookings}
                </th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {t.prmsExtended.lastVisit}
                </th>
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">
                  {t.prmsExtended.status}
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {mockPRMs.map((prm) => (
                <tr key={prm.id} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {prm.name.charAt(0)}
                      </div>
                      <span className="font-semibold">{prm.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail size={14} />
                        {prm.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Phone size={14} />
                        {prm.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">{prm.bookings}</td>
                  <td className="px-6 py-4 text-slate-600">{prm.lastVisit}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
                        prm.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {prm.status === 'active' ? t.common.active : t.common.inactive}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      <MoreVertical size={18} className="text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
