import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday as isDateToday,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Stethoscope,
  Zap,
} from '../ui/icons';
import React, { useMemo, useState } from 'react';
import { CalendarDay } from '../components/calendar/CalendarDay';
import { MOCK_BOOKINGS } from '../constants/mockData';
import { Booking } from '../types';
import { StatCard } from '../ui/StatCard';
import { useTranslation } from '../i18n';

export const DashboardPage: React.FC = () => {
  const { t, formatDate } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(endOfMonth(currentDate));
    return eachDayOfInterval({ start, end });
  }, [currentDate]);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const bookingsForSelectedDate = useMemo(() => {
    return MOCK_BOOKINGS.filter((b) => isSameDay(b.date, selectedDate));
  }, [selectedDate]);

  const getBookingsForDate = (date: Date) => {
    if (isSameDay(date, new Date())) return MOCK_BOOKINGS;

    const dayNum = date.getDate();
    if (dayNum % 7 === 0) return [{ id: `m-${dayNum}`, status: 'approved' } as Booking];
    if (dayNum % 5 === 0)
      return [
        { id: `m-${dayNum}`, status: 'pending' } as Booking,
        { id: `m2-${dayNum}`, status: 'approved' } as Booking,
      ];
    return [];
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Stats Grid - Compact */}
      <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-primary/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <CheckCircle2 size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-slate-500">{t.dashboardExtended.approved}</p>
            <p className="text-lg font-bold">42</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-primary/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent-amber/10">
            <Clock size={18} className="text-accent-amber" />
          </div>
          <div>
            <p className="text-xs text-slate-500">{t.dashboardExtended.pending}</p>
            <p className="text-lg font-bold">18</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-primary/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/5">
            <Zap size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-slate-500">{t.dashboardExtended.highActivity}</p>
            <p className="text-lg font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Main Content: Calendar + Side Panel */}
      <div className="flex flex-col xl:flex-row gap-4 flex-1 min-h-0">
        {/* Calendar - Left Side - Full Height */}
        <div
          id="calendar-container"
          className="flex-1 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden flex flex-col min-h-0"
        >
          {/* Header */}
          <div className="p-3 flex items-center justify-between border-b border-primary/5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold">{formatDate(currentDate, 'MMMM yyyy')}</h2>
              <div className="flex gap-1">
                <button
                  id="prev-month-btn"
                  onClick={prevMonth}
                  className="p-1.5 hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  id="next-month-btn"
                  onClick={nextMonth}
                  className="p-1.5 hover:bg-primary/5 rounded-lg transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="text-[10px] text-slate-500">{t.common.approved}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-accent-amber"></span>
                <span className="text-[10px] text-slate-500">{t.common.pending}</span>
              </div>
            </div>
          </div>

          {/* Calendar Header Days */}
          <div className="grid grid-cols-7 text-center border-b border-primary/5 bg-primary/5 flex-shrink-0">
            {t.calendar.daysShort.map((day) => (
              <div
                key={day}
                className="py-1.5 text-[9px] font-bold uppercase tracking-widest text-primary/60"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid - Fills remaining space */}
          <div className="grid grid-cols-7 flex-1 min-h-0">
            {days.map((day) => (
              <CalendarDay
                key={day.toString()}
                day={day}
                currentMonth={currentDate}
                isToday={isDateToday(day)}
                bookings={getBookingsForDate(day)}
                onClick={setSelectedDate}
              />
            ))}
          </div>
        </div>

        {/* Right Panel: Schedule + Quick Stats */}
        <div className="xl:w-[340px] flex-shrink-0 flex flex-col gap-3 min-h-0">
          {/* Today's Schedule - Flex grow to fill space */}
          <div
            id="schedule-section"
            className="bg-white p-4 rounded-3xl shadow-sm border border-primary/5 flex flex-col flex-1 min-h-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2 flex-shrink-0">
              <h3 className="text-base font-bold">
                {isSameDay(selectedDate, new Date()) ? t.common.today : formatDate(selectedDate, 'MMM d')}
              </h3>
              <button
                id="view-all-schedule-btn"
                className="text-primary text-xs font-bold hover:underline"
              >
                {t.common.viewAll}
              </button>
            </div>

            <div className="space-y-2 overflow-y-auto flex-1 min-h-0 overflow-x-hidden">
              {bookingsForSelectedDate.length > 0 ? (
                bookingsForSelectedDate.map((booking) => (
                  <div
                    key={booking.id}
                    className={`group flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      booking.status === 'approved'
                        ? 'bg-primary/5 hover:bg-primary/10 border border-transparent hover:border-primary/20'
                        : 'bg-accent-amber/5 border border-accent-amber/10 hover:border-accent-amber/30 hover:bg-accent-amber/10'
                    }`}
                  >
                    <div
                      className={`Size-8 rounded-full bg-white flex items-center justify-center border flex-shrink-0 transition-colors duration-200 ${
                        booking.status === 'approved'
                          ? 'border-primary/10 text-primary group-hover:border-primary/30'
                          : 'border-accent-amber/10 text-accent-amber group-hover:border-accent-amber/30'
                      }`}
                    >
                      {booking.type === 'medical' ? (
                        <Stethoscope size={12} />
                      ) : (
                        <FileText size={12} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-xs truncate">{booking.title}</p>
                      <p className="text-[10px] text-slate-500">{booking.time}</p>
                    </div>
                    <span
                      className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full uppercase ${
                        booking.status === 'approved'
                          ? 'bg-primary text-white'
                          : 'bg-accent-amber text-white'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-3 text-center text-slate-400 text-xs">
                  {t.dashboardExtended.noBookingsForDate}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats - Fixed height */}
          <div
            id="quick-stats-section"
            className="bg-primary p-4 rounded-3xl text-white shadow-xl shadow-primary/20 flex-shrink-0 h-[220px]"
          >
            <h3 className="text-base font-bold mb-3">{t.dashboardExtended.quickStats}</h3>
            <div className="space-y-2">
              <div>
                <p className="text-white/60 text-[10px]">{t.dashboardExtended.monthlyGoal}</p>
                <div className="flex items-end justify-between mb-1">
                  <span className="text-lg font-bold">84%</span>
                  <span className="text-[10px]">52/62</span>
                </div>
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[84%]"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 p-2 rounded-lg">
                  <p className="text-white/60 text-[9px]">{t.dashboardExtended.capacity}</p>
                  <p className="text-base font-bold">92%</p>
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <p className="text-white/60 text-[9px]">{t.dashboardExtended.efficiency}</p>
                  <p className="text-base font-bold">1.4x</p>
                </div>
              </div>

              <button
                id="generate-report-btn"
                className="w-full py-2 bg-white text-primary font-bold rounded-lg hover:bg-slate-50 text-xs"
              >
                {t.dashboardExtended.generateReport}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
