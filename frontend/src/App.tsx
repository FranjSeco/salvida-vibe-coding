import React from 'react';
import { BrowserRouter, Route, Routes } from './router';
import { Layout } from './components/layout/Layout';
import { BookingsPage, DashboardPage, PRMsPage, SettingsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="prms" element={<PRMsPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
