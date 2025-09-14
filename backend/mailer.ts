import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: 'feedback.env' });

export const sendBookingEmail = async (bookingDetails: string) => {
  console.log('📦 Loading transporter...');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log('📤 Preparing mail options...');
  const mailOptions = {
    from: `"Booking Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: 'New Booking Received!',
    text: `📅 Booking Info:\n\n${bookingDetails}`,
  };

  try {
    console.log('🚀 Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent!');
  } catch (error) {
    console.error('❌ Email failed to send:', error);
  }
};