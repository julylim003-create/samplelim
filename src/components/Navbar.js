import React from 'react';

function Navbar({ activeTab, setActiveTab, onBackToRegister }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="ball-logo">●</span>
        <div className="brand-text">
          <strong>PICKLEBALLIM</strong>
          <span>COURT CLUB</span>
        </div>
      </div>

      <div className="nav-links">
        <button 
          type="button"
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          type="button"
          className={`nav-item ${activeTab === 'games' ? 'active' : ''}`}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
        <button 
          type="button"
          className="reserve-btn-nav"
          onClick={() => setActiveTab('reservations')}
        >
          Court Reservation
        </button>

        {/* Back to Registration Trigger */}
        <button 
          type="button" 
          className="nav-item back-btn" 
          onClick={onBackToRegister}      
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;