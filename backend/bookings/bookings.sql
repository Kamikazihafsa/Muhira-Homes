CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  guests INTEGER CHECK (guests > 0),
  message TEXT,
  booking_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);