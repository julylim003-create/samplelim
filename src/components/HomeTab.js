import React from 'react';

const cardData = [
  {
    id: 1,
    icon: "🎾",
    title: "JOIN A GAME",
    text: "Find a doubles or singles match.",
    buttonText: "VIEW OPEN GAMES",
    buttonType: "lime",
    tab: "games"
  },
  {
    id: 2,
    icon: "📅",
    title: "RESERVE A COURT",
    text: "Book your court time up to 7 days in advance.",
    buttonText: "GO TO RESERVATIONS",
    buttonType: "dark",
    tab: "reservations"
  },
  {
    id: 3,
    icon: "📢",
    title: "CLUB NEWS & EVENTS",
    text: "Stay updated on tournaments and social nights.",
    buttonText: "VIEW CLUB CALENDAR",
    buttonType: "lime",
    tab: "games" // Updated from 'home' to 'games' so clicking navigates to upcoming events
  }
];

function HomeTab({ firstName, setActiveTab }) {
  const handleCardClick = (targetTab) => {
    setActiveTab(targetTab);
  };

  return (
    <>
      {/* Header Section */}
      <div className="welcome-banner">
        <p className="sub-tag">
          {firstName ? `Welcome back, ${firstName}!` : "Congratulations, you've successfully registered!"}
        </p>
        <h1 className="hero-title">
          WELCOME TO THE<br />
          PICKLEBALLIM COURT CLUB!
        </h1>
        <p className="description">
          Explore our games, book your next court, and connect with fellow players. You've officially joined the court!
        </p>
      </div>

      {/* Action Cards Grid */}
      <div className="cards-grid">
        {cardData.map((card) => (
          <div key={card.id} className="action-card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button 
              type="button"
              className={`card-btn ${card.buttonType}`}
              onClick={() => handleCardClick(card.tab)}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeTab;