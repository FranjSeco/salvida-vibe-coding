import { Booking } from '../types';

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    title: 'Routine PRM Checkup',
    time: '10:00 AM - 11:30 AM',
    status: 'approved',
    type: 'medical',
    date: new Date(),
  },
  {
    id: '2',
    title: 'Contract Revision',
    time: '02:00 PM - 03:00 PM',
    status: 'pending',
    type: 'contract',
    date: new Date(),
  },
  {
    id: '3',
    title: 'Booking #429',
    time: '09:00 AM',
    status: 'approved',
    type: 'medical',
    date: new Date(),
  },
  {
    id: '4',
    title: 'Meeting w/ PRM',
    time: '11:00 AM',
    status: 'approved',
    type: 'medical',
    date: new Date(),
  },
];
