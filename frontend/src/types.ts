export interface Booking {
  id: string;
  title: string;
  time: string;
  status: 'approved' | 'pending';
  type: 'medical' | 'contract';
  date: Date;
}

export interface CalendarDayProps {
  day: Date;
  currentMonth: Date;
  isToday?: boolean;
  bookings?: Booking[];
  onClick?: (date: Date) => void;
  compact?: boolean;
}
