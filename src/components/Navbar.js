// src/components/Navbar.jsx
import React from 'react';

// Header navigation component with tab switcher
export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      {/* Brand Logo & Name */}
      <div className="nav-brand">
        <span className="ball">●</span>
        <div className="brand-text">
          <strong>PICKLEBALL</strong>
          <span>COURT CLUB</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-links">
        <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          Home
        </button>
        <button className={`nav-item ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>
          Games
        </button>
        <button className={`reserve-btn-nav ${activeTab === 'reservations' ? 'active-btn' : ''}`} onClick={() => setActiveTab('reservations')}>
          Court Reservation
        </button>
      </div>
    </nav>
  );
}