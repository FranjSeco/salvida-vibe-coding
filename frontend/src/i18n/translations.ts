/**
 * Sistema de traducciones
 * Estructura preparada para múltiples idiomas
 */

import { format, type FormatOptions } from 'date-fns';
import { es } from './locales/es-ES';
import { en } from './locales/en-EN';
import { dateFnsLocales, type AppLocale } from './dateLocale';
import { defaultLanguage, type Language, type Translations } from './locales/types';

export { defaultLanguage, type Language, type Translations } from './locales/types';
export { dateFnsLocales, localeNames, appLocales, type AppLocale } from './dateLocale';

/**
 * Diccionario de traducciones por idioma
 */
export const translations: Record<Language, Translations> = {
  'es-ES': es,
  'en-EN': en,
};

/**
 * Hook para acceder a las traducciones
 */
export function useTranslation() {
  const t = translations[defaultLanguage];
  const locale = defaultLanguage;

  return {
    t,
    locale,
    /**
     * Formatea una fecha usando el idioma actual de la app
     * @param date - La fecha a formatear
     * @param formatStr - String de formato (ej: 'MMMM yyyy', 'd MMMM')
     * @param options - Opciones adicionales de date-fns
     */
    formatDate: (date: Date | string | number, formatStr: string, options?: FormatOptions) => {
      return format(new Date(date), formatStr, {
        locale: dateFnsLocales[locale as AppLocale],
        ...options,
      });
    },
    format: (key: string) => {
      const keys = key.split('.');
      let value: unknown = t;
      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
      }
      return value as string;
    },
  };
}
