import { format, isSameMonth } from 'date-fns';
import React from 'react';
import { CalendarDayProps } from '../../types';
import { useTranslation } from '../../i18n';

export const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  currentMonth,
  isToday,
  bookings = [],
  onClick,
}) => {
  const { t } = useTranslation();
  const isCurrentMonth = isSameMonth(day, currentMonth);

  return (
    <div
      id={`calendar-day-${format(day, 'yyyy-MM-dd')}`}
      onClick={() => onClick?.(day)}
      className={`
        h-full min-h-[80px] border-r border-b border-primary/5 transition-colors relative
        flex flex-col justify-between
        ${!isCurrentMonth ? 'text-slate-300 bg-slate-50' : 'hover:bg-primary/5 cursor-pointer'}
        ${isToday ? 'bg-primary/10' : ''}
      `}
    >
      {/* Day number row */}
      <div className="p-2 flex justify-between items-start">
        <span className={`text-sm font-semibold ${isToday ? 'text-primary font-bold' : ''}`}>
          {format(day, 'd')}
        </span>
        {isToday && (
          <span className="text-[8px] font-bold text-primary uppercase tracking-wider">{t.calendar.today}</span>
        )}
      </div>

      {/* Bookings - centered in available space */}
      <div className="flex-1 px-2 pb-1 flex flex-col justify-start overflow-hidden">
        {(bookings || []).length > 0 ? (
          <div className="flex flex-col gap-0.5">
            {(bookings || []).slice(0, 3).map((b) => (
              <div
                key={b.id}
                className={`
                  px-1.5 py-0.5 rounded text-[9px] font-medium truncate
                  ${
                    b.status === 'approved'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent-amber/10 text-amber-700'
                  }
                `}
              >
                {(b.title || '').length > 15 ? (b.title || '').substring(0, 15) + '...' : b.title}
              </div>
            ))}
            {(bookings || []).length > 3 && (
              <span className="text-[8px] text-slate-400">+{(bookings || []).length - 3}</span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
