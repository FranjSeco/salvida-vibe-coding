import {
  Calendar,
  CheckCircle2,
  Clock,
  Clock3,
  FileText,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Stethoscope,
  XCircle,
} from '../ui/icons';
import React, { useState } from 'react';
import { useTranslation } from '../i18n';

const mockBookings = [
  {
    id: '1',
    title: 'Routine PRM Checkup',
    client: 'María García',
    date: '2024-01-20',
    time: '10:00 AM - 11:30 AM',
    type: 'medical',
    status: 'approved',
  },
  {
    id: '2',
    title: 'Contract Revision',
    client: 'Carlos Rodríguez',
    date: '2024-01-20',
    time: '02:00 PM - 03:00 PM',
    type: 'contract',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Initial Consultation',
    client: 'Ana Martínez',
    date: '2024-01-21',
    time: '09:00 AM - 10:00 AM',
    type: 'medical',
    status: 'approved',
  },
  {
    id: '4',
    title: 'Contract Signing',
    client: 'Luis Sánchez',
    date: '2024-01-22',
    time: '11:00 AM - 12:00 PM',
    type: 'contract',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Follow-up Visit',
    client: 'Elena Pérez',
    date: '2024-01-22',
    time: '03:00 PM - 04:00 PM',
    type: 'medical',
    status: 'approved',
  },
  {
    id: '6',
    title: 'Contract Renewal',
    client: 'Carlos Rodríguez',
    date: '2024-01-23',
    time: '10:00 AM - 11:00 AM',
    type: 'contract',
    status: 'cancelled',
  },
];

const statusConfig = {
  approved: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', label: 'approved' },
  pending: { icon: Clock3, color: 'text-amber-600', bg: 'bg-amber-50', label: 'pending' },
  cancelled: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'cancelled' },
};

export const BookingsPage: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filteredBookings =
    filter === 'all' ? mockBookings : mockBookings.filter((b) => b.status === filter);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={t.bookingsExtended.searchPlaceholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-primary/10">
            <Filter size={18} className="text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none text-sm font-medium"
            >
              <option value="all">{t.bookingsExtended.allStatus}</option>
              <option value="approved">{t.common.approved}</option>
              <option value="pending">{t.common.pending}</option>
              <option value="cancelled">{t.common.cancelled}</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            <Plus size={20} />
            {t.bookingsExtended.newBooking}
          </button>
        </div>
      </div>

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBookings.map((booking) => {
          const status = statusConfig[booking.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`p-2 rounded-lg ${booking.type === 'medical' ? 'bg-primary/10 text-primary' : 'bg-accent-amber/10 text-accent-amber'}`}
                >
                  {booking.type === 'medical' ? <Stethoscope size={20} /> : <FileText size={20} />}
                </div>
                <button className="p-1 hover:bg-primary/10 rounded-lg transition-colors">
                  <MoreVertical size={18} className="text-slate-400" />
                </button>
              </div>

              <h3 className="font-bold text-lg mb-1">{booking.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{booking.client}</p>

              <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {booking.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {booking.time}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${status.bg} ${status.color}`}
                >
                  <StatusIcon size={14} />
                  {t.common[status.label as keyof typeof t.common]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <Calendar size={48} className="mx-auto mb-4 opacity-50" />
          <p>{t.bookingsExtended.noBookingsFound}</p>
        </div>
      )}
    </div>
  );
};
