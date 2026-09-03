// src/App.js
import React, { useState } from 'react';
import './App.css';

// Import data and modular UI components
import { UPCOMING_MATCHES, COURTS } from './data/mockdata';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import GamesTab from './components/GamesTab';
import ReservationsTab from './components/ReservationsTab';

function App() {
  // Main app state variables
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [userData, setUserData] = useState(null);

  // Callback handler triggered upon successful form submission
  const handleRegisterSuccess = (formData) => {
    setUserData(formData);
    setIsRegistered(true);
  };

  // Render Registration view until form is submitted
  if (!isRegistered) {
    return (
      <div className="container">
        <RegistrationForm onSuccess={handleRegisterSuccess} />
      </div>
    );
  }

  // Render main portal dashboard view after registration
  return (
    <div className="landing-page">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Dynamic View Area */}
      <main className="hero-container">
        {activeTab === 'home' && (
          <HomeTab firstName={userData?.firstName} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'games' && <GamesTab matches={UPCOMING_MATCHES} />}
        {activeTab === 'reservations' && <ReservationsTab courts={COURTS} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;