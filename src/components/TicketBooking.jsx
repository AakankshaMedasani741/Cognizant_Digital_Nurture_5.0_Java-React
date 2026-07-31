/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { useState } from 'react';

// Mock flight details for Guest view
const flightDetails = [
  { id: 'AI-101', carrier: 'Air India', from: 'Chennai', to: 'Delhi', dep: '06:00 AM', price: 'Rs. 5,500' },
  { id: '6E-204', carrier: 'IndiGo', from: 'Chennai', to: 'Mumbai', dep: '09:30 AM', price: 'Rs. 4,200' },
  { id: 'UK-812', carrier: 'Vistara', from: 'Chennai', to: 'Bangalore', dep: '02:15 PM', price: 'Rs. 3,100' },
  { id: 'QP-451', carrier: 'Akasa Air', from: 'Chennai', to: 'Hyderabad', dep: '07:45 PM', price: 'Rs. 2,900' }
];

export default function TicketBooking() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    flight: 'AI-101',
    date: '2026-08-01',
    seats: 1
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully booked ${bookingForm.seats} ticket(s) for flight ${bookingForm.flight} on ${bookingForm.date}!`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Ticket Booking Portal</h2>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '700px', margin: '0 auto' }}>
        
        {/* Header containing auth toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '25px' }}>
          <h3 style={{ margin: 0, color: '#34495e' }}>
            {isLoggedIn ? 'User View' : 'Guest View'}
          </h3>
          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)} 
            style={{ 
              padding: '8px 16px', 
              background: isLoggedIn ? '#e74c3c' : '#3498db', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          /* Logged In User View */
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#27ae60' }}>Welcome back, Authenticated User!</h3>
            <p style={{ color: '#7f8c8d' }}>You are now authorized to book flight tickets. Please fill out the form below:</p>
            
            <form onSubmit={handleBookingSubmit} style={{ marginTop: '20px' }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Flight:</label>
                <select 
                  value={bookingForm.flight} 
                  onChange={(e) => setBookingForm({ ...bookingForm, flight: e.target.value })}
                  style={{ padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  {flightDetails.map(f => (
                    <option key={f.id} value={f.id}>{f.carrier} ({f.id}) - {f.from} to {f.to} - {f.price}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Travel Date:</label>
                <input 
                  type="date" 
                  value={bookingForm.date} 
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  style={{ padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Number of Seats:</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={bookingForm.seats} 
                  onChange={(e) => setBookingForm({ ...bookingForm, seats: parseInt(e.target.value) || 1 })}
                  style={{ padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ padding: '10px 20px', width: '100%', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
              >
                Book Ticket Now
              </button>
            </form>
          </div>
        ) : (
          /* Guest View */
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#e67e22' }}>Welcome Guest!</h3>
            <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>Please log in to book flight tickets. Below are the scheduled flights today:</p>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              {flightDetails.map(flight => (
                <div 
                  key={flight.id} 
                  style={{ 
                    border: '1px solid #dee2e6', 
                    borderRadius: '8px', 
                    padding: '15px', 
                    background: '#f8f9fa',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{flight.carrier} ({flight.id})</h4>
                    <span style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>{flight.from} &rarr; {flight.to} | Dep: {flight.dep}</span>
                  </div>
                  <span style={{ fontWeight: 'bold', color: '#2980b9' }}>{flight.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
