import bookingRoutes from './bookings/routes';
import express from 'express';
import { sendBookingEmail } from './mailer';


sendBookingEmail('Test message from startup 🚀');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the TypeScript backend!');
});

app.post('/bookings', async (req, res) => {
  const { name, email, date } = req.body;

  const message = `Name: ${name}\nEmail: ${email}\nDate: ${date}`;

  try {
    await sendBookingEmail(message);
    res.status(200).json({ message: 'Booking received & email sent! ✅' });
  } catch (error) {
    console.error('Email failed:', error);
    res.status(500).json({ message: 'Something went wrong 😞' });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});