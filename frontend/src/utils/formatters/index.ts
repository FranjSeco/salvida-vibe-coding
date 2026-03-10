import { type FormatOptions, format } from 'date-fns';
import { type AppLocale, dateFnsLocales } from '../../i18n/dateLocale';
import { defaultLanguage } from '../../i18n/locales/types';

export function formatDate(
  date: Date | string | number,
  formatStr: string,
  options?: FormatOptions
): string {
  const locale: AppLocale = defaultLanguage;

  return format(new Date(date), formatStr, {
    locale: dateFnsLocales[locale],
    ...options,
  });
}

export function formatShortDate(date: Date | string | number): string {
  return formatDate(date, 'd/M/yyyy');
}

export function formatLongDate(date: Date | string | number): string {
  return formatDate(date, 'd MMMM yyyy');
}

export function formatDateTime(date: Date | string | number): string {
  return formatDate(date, 'd MMMM yyyy, H:mm');
}

export function getCurrentMonthYear(): string {
  return formatDate(new Date(), 'MMMM yyyy');
}
