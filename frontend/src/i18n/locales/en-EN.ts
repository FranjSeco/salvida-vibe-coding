/**
 * English Translations
 * TODO: Translate all strings to English
 */

import type { Translations } from './types';

export const en: Translations = {
  // App
  app: {
    name: 'Salvida',
  },

  // Navigation
  nav: {
    dashboard: 'Dashboard',
    prms: 'My PRMs',
    bookings: 'Bookings',
    settings: 'Settings',
  },

  // User
  user: {
    profile: 'Profile',
    admin: 'Admin',
    logout: 'Log out',
  },

  // Dashboard
  dashboard: {
    title: 'Calendar',
    subtitle: 'Manage your monthly bookings',
    overview: 'Overview',
    approvedBookings: 'Approved Bookings',
    pendingRequests: 'Pending Requests',
    highActivityDays: 'High Activity Days',
    today: 'Today',
    viewAll: 'View all',
    noBookings: 'No bookings for this day.',
    quickStats: 'Quick Stats',
    monthlyGoal: 'Monthly Goal',
    capacity: 'Capacity',
    efficiency: 'Efficiency',
    generateReport: 'Generate Report',
  },

  // Calendar
  calendar: {
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: 'Today',
    approved: 'Approved',
    pending: 'Pending',
    cancelled: 'Cancelled',
  },

  // PRMs
  prms: {
    title: 'My PRMs',
    description: 'Manage your reduced mobility patients',
    search: 'Search PRMs...',
    addPrm: 'Add PRM',
    name: 'Name',
    contact: 'Contact',
    bookings: 'Bookings',
    lastVisit: 'Last visit',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
  },

  // Bookings
  bookings: {
    title: 'Bookings Management',
    description: 'Create, edit and track all bookings',
    search: 'Search bookings...',
    filter: 'Filter',
    allStatus: 'All statuses',
    newBooking: 'New Booking',
    types: {
      medical: 'Medical',
      contract: 'Contract',
    },
  },

  // Settings
  settings: {
    title: 'Settings',
    description: 'Configure your preferences and account',
    profile: 'Profile',
    notifications: 'Notifications',
    security: 'Security',
    appearance: 'Appearance',
    language: 'Language',
    changePhoto: 'Change photo',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    organization: 'Organization',
    saveChanges: 'Save changes',
    enable2fa: 'Enable 2FA',
    updatePassword: 'Update password',
  },

  // Common
  common: {
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    confirm: 'Confirm',
    viewAll: 'View all',
    today: 'Today',
    all: 'All',
    approved: 'Approved',
    pending: 'Pending',
    cancelled: 'Cancelled',
    active: 'Active',
    inactive: 'Inactive',
    name: 'Name',
    contact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    saveChanges: 'Save changes',
    enabled: 'Enabled',
    disabled: 'Disabled',
    yes: 'Yes',
    no: 'No',
  },

  // Dashboard Extended
  dashboardExtended: {
    approved: 'Approved',
    pending: 'Pending',
    highActivity: 'High Activity',
    noBookingsForDate: 'No bookings for this date.',
    quickStats: 'Quick Stats',
    monthlyGoal: 'Monthly Goal',
    capacity: 'Capacity',
    efficiency: 'Efficiency',
    generateReport: 'Generate Report',
    noBookingsFound: 'No bookings found.',
  },

  // Calendar Extended
  calendarExtended: {
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
  },

  // Settings Extended
  settingsExtended: {
    profileSettings: 'Profile Settings',
    changePhoto: 'Change photo',
    photoHint: 'JPG, PNG or GIF. Max 2MB.',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    organization: 'Organization',
    saveChanges: 'Save changes',
    notificationPreferences: 'Notification Preferences',
    emailNotifications: 'Email notifications',
    emailNotificationsDesc: 'Receive booking updates via email',
    pushNotifications: 'Push notifications',
    pushNotificationsDesc: 'Get instant updates on your device',
    bookingReminders: 'Booking reminders',
    bookingRemindersDesc: 'Receive reminders before scheduled bookings',
    marketingEmails: 'Marketing emails',
    marketingEmailsDesc: 'Receive news and promotional content',
    securitySettings: 'Security Settings',
    changePassword: 'Change password',
    changePasswordDesc: 'Update your password to keep your account secure',
    updatePassword: 'Update password',
    twoFactorAuth: 'Two-Factor Authentication',
    twoFactorAuthDesc: 'Add an extra layer of security to your account',
    enable2fa: 'Enable 2FA',
    appearance: 'Appearance',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    accentColor: 'Accent Color',
    languageRegion: 'Language & Region',
    displayLanguage: 'Display Language',
    timezone: 'Timezone',
    dateFormat: 'Date Format',
  },

  // Bookings Extended
  bookingsExtended: {
    title: 'Bookings Management',
    description: 'Create, edit and track all bookings',
    searchPlaceholder: 'Search bookings...',
    filter: 'Filter',
    allStatus: 'All statuses',
    newBooking: 'New Booking',
    noBookingsFound: 'No bookings found for this filter.',
    types: {
      medical: 'Medical',
      contract: 'Contract',
    },
  },

  // PRMs Extended
  prmsExtended: {
    title: 'My PRMs',
    description: 'Manage your reduced mobility patients',
    searchPlaceholder: 'Search PRMs...',
    addPrm: 'Add PRM',
    name: 'Name',
    contact: 'Contact',
    bookings: 'Bookings',
    lastVisit: 'Last visit',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
  },
};
