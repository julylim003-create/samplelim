// src/data/mockData.js

// Mock data array for upcoming pickleball matches
export const UPCOMING_MATCHES = [
  { id: 1, type: 'Doubles Open', time: 'Today, 4:00 PM', court: 'Court 2 (Indoor)', status: 'Confirmed' },
  { id: 2, type: 'Club Championship', time: 'Sat, Sep 12 • 10:00 AM', court: 'Center Court', status: 'Pending' },
];

// Mock data array for available court locations
export const COURTS = [
  { id: 101, name: 'Court A - Indoor', surface: 'Hardcourt', available: '2:00 PM - 5:00 PM' },
  { id: 102, name: 'Court B - Outdoor', surface: 'Standard Slate', available: 'All Day' },
  { id: 103, name: 'Court C - Tournament', surface: 'Pro Cushion', available: '6:00 PM - 9:00 PM' },
];