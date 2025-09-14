import { Request, Response } from 'express';
import db from '../db';
import { sendBookingEmail } from '../mailer';

export const handleBooking = async (req: Request, res: Response) => {
  const { name, email, phone, guests, message, booking_date } = req.body;

  try {
    await db.query(
      'INSERT INTO bookings(name, email, phone, guests, message, booking_date) VALUES($1, $2, $3, $4, $5, $6)',
      [name, email, phone, guests, message, booking_date]
    );

    await sendBookingEmail(
      `Booking received:\nName: ${name}\nEmail: ${email}\nGuests: ${guests}\nPhone: ${phone}\nMessage: ${message}\nDate: ${booking_date}`
    );

    res.status(200).json({ message: 'Booking saved & email sent! ✅' });
  } catch (err) {
    console.error('❌ Booking error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllBookings = async (_req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to retrieve bookings' });
  }
};