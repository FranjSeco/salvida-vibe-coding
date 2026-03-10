import { Bell, Building, Globe, Mail, Palette, Phone, Save, Shield, User } from '../ui/icons';
import React, { useState } from 'react';
import { useTranslation } from '../i18n';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('profile');

  const settingsSections = [
    { id: 'profile', label: t.settings.profile, icon: User },
    { id: 'notifications', label: t.settings.notifications, icon: Bell },
    { id: 'security', label: t.settings.security, icon: Shield },
    { id: 'appearance', label: t.settings.appearance, icon: Palette },
    { id: 'language', label: t.settings.language, icon: Globe },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Settings Navigation */}
      <div className="lg:w-64 flex-shrink-0">
        <nav className="bg-white rounded-2xl p-4 shadow-sm border border-primary/5">
          {settingsSections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeSection === id ? 'bg-primary text-white' : 'text-slate-600 hover:bg-primary/5'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="flex-1">
        {activeSection === 'profile' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5">
            <h2 className="text-2xl font-bold mb-6">{t.settingsExtended.profileSettings}</h2>

            <div className="flex items-center gap-6 mb-8">
              <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
                AJ
              </div>
              <div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {t.settingsExtended.changePhoto}
                </button>
                <p className="text-sm text-slate-500 mt-2">{t.settingsExtended.photoHint}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t.settingsExtended.firstName}</label>
                <input
                  type="text"
                  defaultValue="Alex"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t.settingsExtended.lastName}</label>
                <input
                  type="text"
                  defaultValue="Johnson"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Mail size={16} /> {t.settingsExtended.email}
                </label>
                <input
                  type="email"
                  defaultValue="alex.johnson@salvida.com"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Phone size={16} /> {t.settingsExtended.phone}
                </label>
                <input
                  type="tel"
                  defaultValue="+34 612 345 678"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Building size={16} /> {t.settingsExtended.organization}
                </label>
                <input
                  type="text"
                  defaultValue="Salvida Management"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                <Save size={20} />
                {t.settingsExtended.saveChanges}
              </button>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5">
            <h2 className="text-2xl font-bold mb-6">{t.settingsExtended.notificationPreferences}</h2>

            <div className="space-y-6">
              {[
                {
                  label: t.settingsExtended.emailNotifications,
                  description: t.settingsExtended.emailNotificationsDesc,
                  enabled: true,
                },
                {
                  label: t.settingsExtended.pushNotifications,
                  description: t.settingsExtended.pushNotificationsDesc,
                  enabled: true,
                },
                {
                  label: t.settingsExtended.bookingReminders,
                  description: t.settingsExtended.bookingRemindersDesc,
                  enabled: true,
                },
                {
                  label: t.settingsExtended.marketingEmails,
                  description: t.settingsExtended.marketingEmailsDesc,
                  enabled: false,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                  <button
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      item.enabled ? 'bg-primary' : 'bg-slate-200'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        item.enabled ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'security' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5">
            <h2 className="text-2xl font-bold mb-6">{t.settingsExtended.securitySettings}</h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-bold mb-2">{t.settingsExtended.changePassword}</h3>
                <p className="text-sm text-slate-500 mb-4">
                  {t.settingsExtended.changePasswordDesc}
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {t.settingsExtended.updatePassword}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <h3 className="font-bold mb-2 text-green-800">{t.settingsExtended.twoFactorAuth}</h3>
                <p className="text-sm text-green-600 mb-4">
                  {t.settingsExtended.twoFactorAuthDesc}
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                  {t.settingsExtended.enable2fa}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'appearance' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5">
            <h2 className="text-2xl font-bold mb-6">{t.settingsExtended.appearance}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">{t.settingsExtended.theme}</h3>
                <div className="flex gap-4">
                  {[
                    { key: 'light', label: t.settingsExtended.light },
                    { key: 'dark', label: t.settingsExtended.dark },
                    { key: 'system', label: t.settingsExtended.system },
                  ].map((theme) => (
                    <button
                      key={theme.key}
                      className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${
                        theme.key === 'light'
                          ? 'bg-primary text-white'
                          : 'border border-primary/10 hover:bg-primary/5'
                      }`}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">{t.settingsExtended.accentColor}</h3>
                <div className="flex gap-3">
                  {['#1E3A5F', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'language' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/5">
            <h2 className="text-2xl font-bold mb-6">{t.settingsExtended.languageRegion}</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t.settingsExtended.displayLanguage}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t.settingsExtended.timezone}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all">
                  <option>Europe/Madrid (GMT+1)</option>
                  <option>America/New_York (GMT-5)</option>
                  <option>Europe/London (GMT+0)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t.settingsExtended.dateFormat}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
