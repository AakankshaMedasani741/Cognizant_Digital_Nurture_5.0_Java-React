/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { useState } from 'react';

// Currency Converter Sub-component
export function CurrencyConverter() {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rupees = parseFloat(inr);
    if (!isNaN(rupees)) {
      // Conversion rate: 1 Euro = 90 INR
      const conversionResult = (rupees / 90).toFixed(2);
      setEur(conversionResult);
    } else {
      alert('Please enter a valid amount in INR');
    }
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#f1f2f6', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h3>Currency Converter (INR to EUR)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Amount in INR (Rupees):</label>
          <input 
            type="number" 
            value={inr} 
            onChange={(e) => setInr(e.target.value)} 
            placeholder="Enter INR"
            style={{ padding: '8px', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '8px 16px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Convert
        </button>
      </form>
      {eur !== null && (
        <h4 style={{ marginTop: '15px', color: '#27ae60' }}>
          Equivalent Amount: &euro; {eur} Euros
        </h4>
      )}
    </div>
  );
}

// Main Component
export default function EventExamples() {
  const [count, setCount] = useState(0);

  // Multiple methods triggered by Increment
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello! This is a static message triggered along with the increment.');
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(`Greeting message: ${message}`);
  };

  const handleSyntheticEvent = (e) => {
    console.log('Synthetic Event Object:', e);
    alert('Synthetic Event [OnPress/OnClick] Display: "I was clicked"');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>React Event Examples</h2>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Counter Section */}
        <div style={{ marginBottom: '25px' }}>
          <h3>Counter: <span style={{ color: '#3498db', fontSize: '1.8rem' }}>{count}</span></h3>
          <button 
            onClick={handleIncrement} 
            style={{ padding: '10px 20px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
          >
            Increment (Multiple Methods)
          </button>
          <button 
            onClick={handleDecrement} 
            style={{ padding: '10px 20px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Decrement
          </button>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #eee' }} />

        {/* Alert with parameters Section */}
        <div style={{ margin: '25px 0' }}>
          <h3>Alert Greeting with Arguments</h3>
          <button 
            onClick={() => sayWelcome('welcome')} 
            style={{ padding: '10px 20px', background: '#9b59b6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Say Welcome
          </button>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #eee' }} />

        {/* Synthetic Event Section */}
        <div style={{ margin: '25px 0' }}>
          <h3>Synthetic Event Handling</h3>
          <button 
            onClick={handleSyntheticEvent} 
            style={{ padding: '10px 20px', background: '#f39c12', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            OnPress / OnClick
          </button>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #eee' }} />

        {/* Currency Converter */}
        <CurrencyConverter />

      </div>
    </div>
  );
}
