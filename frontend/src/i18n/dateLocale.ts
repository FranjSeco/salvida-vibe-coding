/**
 * Date-fns Locale Configuration
 * Centraliza los locales para date-fns
 */

import { type Locale } from 'date-fns/locale';

// Importar locales de date-fns
import { es, enUS } from 'date-fns/locale';

export type AppLocale = 'es-ES' | 'en-EN';

/**
 * Mapeo de idiomas de la app a locales de date-fns
 */
export const dateFnsLocales: Record<AppLocale, Locale> = {
  'es-ES': es,
  'en-EN': enUS,
};

/**
 * Idiomas soportados por la app
 */
export const appLocales: AppLocale[] = ['es-ES', 'en-EN'];

/**
 * Nombres de idiomas para UI
 */
export const localeNames: Record<AppLocale, string> = {
  'es-ES': 'Español',
  'en-EN': 'English',
};
