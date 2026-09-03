// src/components/ReservationsTab.jsx
import React from 'react';

// View component for viewing available courts
export default function ReservationsTab({ courts }) {
  return (
    <div className="view-content section-box">
      <h2>COURT RESERVATIONS</h2>
      <p className="section-desc">Select an available court to reserve your playing time.</p>

      {/* Available Courts List */}
      <div className="items-list">
        {courts.map((court) => (
          <div key={court.id} className="list-card">
            <div className="list-card-info">
              <h4>{court.name}</h4>
              <p>Surface: <strong>{court.surface}</strong> | Available: <strong>{court.available}</strong></p>
            </div>
            <button className="card-btn lime action-fit">Book Court</button>
          </div>
        ))}
      </div>
    </div>
  );
}