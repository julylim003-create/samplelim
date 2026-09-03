// src/components/GamesTab.jsx
import React, { useState } from 'react';

// View component for searching and listing upcoming matches
export default function GamesTab({ matches }) {
  // Search filter state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter matches based on search term matching match type or court
  const filteredMatches = matches.filter(
    (m) =>
      m.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.court.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-content section-box">
      <h2>UPCOMING GAMES & MATCHES</h2>
      <p className="section-desc">Browse scheduled sessions or search for open matches.</p>

      {/* Search Input Bar */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search match type or court..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="tab-search-input"
        />
      </div>

      {/* Match Cards List */}
      <div className="items-list">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <div key={match.id} className="list-card">
              <div className="list-card-info">
                <h4>{match.type}</h4>
                <p>{match.time} • {match.court}</p>
              </div>
              <span className={`status-badge ${match.status.toLowerCase()}`}>
                {match.status}
              </span>
            </div>
          ))
        ) : (
          <p className="empty-msg">No matches found matching "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
}