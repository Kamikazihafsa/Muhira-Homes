import React, { useEffect, useState } from 'react';

type Booking = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  guests?: number;
  message?: string;
  booking_date?: string;
  created_at: string;
};

function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">📋 All Bookings</h1>
      <ul className="space-y-6">
        {bookings.map(b => (
          <li key={b.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="font-semibold text-blue-600">{b.name} ({b.email})</p>
            <p>Guests: {b.guests || '—'}</p>
            <p>Phone: {b.phone || '—'}</p>
            <p>Message: {b.message || '—'}</p>
            <p>booking_Date: {b.booking_date || '—'}</p>
            <p className="text-sm text-gray-500">Created: {new Date(b.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingsPage;