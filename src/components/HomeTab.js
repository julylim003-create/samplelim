// src/components/HomeTab.jsx
import React from 'react';

// Home view displaying welcome message and action cards
export default function HomeTab({ firstName, setActiveTab }) {
  return (
    <div className="view-content">
      {/* Hero Welcome Banner */}
      <div className="welcome-banner">
        <p className="sub-tag">Congratulations, {firstName || 'Player'}! You've successfully registered.</p>
        <h1>WELCOME TO THE<br />PICKLEBALLIM COURT CLUB!</h1>
        <p className="description">
          Explore our games, book your next court, and connect with fellow players. You've officially joined the court!
        </p>
      </div>

      {/* Quick Actions */}
      <div className="cards-grid">
        <div className="action-card">
          <div className="card-icon paddle-icon"></div>
          <h3>JOIN A GAME</h3>
          <p>Find a doubles or singles match.</p>
          <button className="card-btn lime" onClick={() => setActiveTab('games')}>
            VIEW OPEN GAMES
          </button>
        </div>

        <div className="action-card">
          <div className="card-icon court-icon"></div>
          <h3>RESERVE A COURT</h3>
          <p>Book your court time up to 7 days in advance.</p>
          <button className="card-btn dark" onClick={() => setActiveTab('reservations')}>
            GO TO RESERVATIONS
          </button>
        </div>

        <div className="action-card">
          <div className="card-icon news-icon"></div>
          <h3>CLUB NEWS & EVENTS</h3>
          <p>Stay updated on tournaments and social nights.</p>
          <button className="card-btn lime" onClick={() => setActiveTab('games')}>
            VIEW CLUB CALENDAR
          </button>
        </div>
      </div>
    </div>
  );
}