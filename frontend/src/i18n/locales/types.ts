/**
 * i18n Types
 * 
 * Tipos para el sistema de traducciones
 * idiomas disponibles (códigos ISO)
 */

export type Language = 'es-ES' | 'en-EN';

export const defaultLanguage: Language = 'es-ES';

export const supportedLanguages: Language[] = ['es-ES', 'en-EN'];

export const languageNames: Record<Language, string> = {
  'es-ES': 'Español',
  'en-EN': 'English',
};

/**
 * Tipo genérico para traducciones - permite cualquier estructura
 */
export type TranslationObject = {
  [key: string]: string | string[] | TranslationObject;
};

/**
 * Tipo de traducciones con estructura conocida
 * Esto permite autocompletado y type-safety
 */
export type Translations = {
  app: {
    name: string;
  };
  nav: {
    dashboard: string;
    prms: string;
    bookings: string;
    settings: string;
  };
  user: {
    profile: string;
    admin: string;
    logout: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    overview: string;
    approvedBookings: string;
    pendingRequests: string;
    highActivityDays: string;
    today: string;
    viewAll: string;
    noBookings: string;
    quickStats: string;
    monthlyGoal: string;
    capacity: string;
    efficiency: string;
    generateReport: string;
  };
  calendar: {
    months: string[];
    daysShort: string[];
    days: string[];
    today: string;
    approved: string;
    pending: string;
    cancelled: string;
  };
  prms: {
    title: string;
    description: string;
    search: string;
    addPrm: string;
    name: string;
    contact: string;
    bookings: string;
    lastVisit: string;
    status: string;
    active: string;
    inactive: string;
  };
  bookings: {
    title: string;
    description: string;
    search: string;
    filter: string;
    allStatus: string;
    newBooking: string;
    types: {
      medical: string;
      contract: string;
    };
  };
  settings: {
    title: string;
    description: string;
    profile: string;
    notifications: string;
    security: string;
    appearance: string;
    language: string;
    changePhoto: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization: string;
    saveChanges: string;
    enable2fa: string;
    updatePassword: string;
  };
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    loading: string;
    error: string;
    success: string;
    confirm: string;
    viewAll: string;
    today: string;
    all: string;
    approved: string;
    pending: string;
    cancelled: string;
    active: string;
    inactive: string;
    name: string;
    contact: string;
    email: string;
    phone: string;
    saveChanges: string;
    enabled: string;
    disabled: string;
    yes: string;
    no: string;
  };
  dashboardExtended: {
    approved: string;
    pending: string;
    highActivity: string;
    noBookingsForDate: string;
    quickStats: string;
    monthlyGoal: string;
    capacity: string;
    efficiency: string;
    generateReport: string;
    noBookingsFound: string;
  };
  calendarExtended: {
    daysShort: string[];
    today: string;
  };
  settingsExtended: {
    profileSettings: string;
    changePhoto: string;
    photoHint: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization: string;
    saveChanges: string;
    notificationPreferences: string;
    emailNotifications: string;
    emailNotificationsDesc: string;
    pushNotifications: string;
    pushNotificationsDesc: string;
    bookingReminders: string;
    bookingRemindersDesc: string;
    marketingEmails: string;
    marketingEmailsDesc: string;
    securitySettings: string;
    changePassword: string;
    changePasswordDesc: string;
    updatePassword: string;
    twoFactorAuth: string;
    twoFactorAuthDesc: string;
    enable2fa: string;
    appearance: string;
    theme: string;
    light: string;
    dark: string;
    system: string;
    accentColor: string;
    languageRegion: string;
    displayLanguage: string;
    timezone: string;
    dateFormat: string;
  };
  bookingsExtended: {
    title: string;
    description: string;
    searchPlaceholder: string;
    filter: string;
    allStatus: string;
    newBooking: string;
    noBookingsFound: string;
    types: {
      medical: string;
      contract: string;
    };
  };
  prmsExtended: {
    title: string;
    description: string;
    searchPlaceholder: string;
    addPrm: string;
    name: string;
    contact: string;
    bookings: string;
    lastVisit: string;
    status: string;
    active: string;
    inactive: string;
  };
};
