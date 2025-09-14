import BookingsPage from './pages/BookingsPage'; // at top

<Route path="/bookings" element={<BookingsPage />} />
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApartmentDetailPage from './pages/ApartmentDetailPage';


function App() {
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apartment/:id" element={<ApartmentDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;