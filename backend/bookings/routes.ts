import express from 'express';
import { handleBooking, getAllBookings } from './controller';

const router = express.Router();

router.post('/', handleBooking);
router.get('/', getAllBookings); // 👈 New route for fetching all bookings

export default router;