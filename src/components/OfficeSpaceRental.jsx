/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React from 'react';
import officeImg from './office.png';

// Individual Office details
const mainOffice = {
  Name: 'DBS',
  Rent: 50000,
  Address: 'Chennai'
};

// List of office spaces
const officeList = [
  { Name: 'DBS Office Space', Rent: 50000, Address: 'Chennai' },
  { Name: 'Premium Co-Working Hub', Rent: 75000, Address: 'Bangalore' },
  { Name: 'Tech Park Cabin', Rent: 58000, Address: 'Hyderabad' },
  { Name: 'Smart Workspace', Rent: 120000, Address: 'Mumbai' }
];

export default function OfficeSpaceRental() {
  const element = 'Office Space';
  const jsxatt = (
    <img 
      src={officeImg} 
      style={{ width: '25%', height: 'auto', borderRadius: '8px', border: '1px solid #ddd', marginTop: '10px' }} 
      alt="Office Space" 
    />
  );

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Office Space Rental Portal</h2>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#34495e', fontSize: '2rem' }}>{element}, at Affordable Range</h1>
        {jsxatt}
        
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#2c3e50' }}>Featured Space: {mainOffice.Name}</h2>
          <h3 style={{ color: mainOffice.Rent < 60000 ? 'red' : 'green' }}>
            Rent: Rs. {mainOffice.Rent}
          </h3>
          <h3 style={{ color: '#7f8c8d' }}>Address: {mainOffice.Address}</h3>
        </div>

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>All Available Office Spaces</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {officeList.map((office, idx) => {
            const rentColor = office.Rent < 60000 ? 'red' : 'green';
            return (
              <div 
                key={idx} 
                style={{ 
                  border: '1px solid #dee2e6', 
                  borderRadius: '8px', 
                  padding: '15px', 
                  background: '#f8f9fa',
                  textAlign: 'left'
                }}
              >
                <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{office.Name}</h4>
                <p style={{ margin: '5px 0', color: rentColor, fontWeight: 'bold' }}>
                  Rent: Rs. {office.Rent}
                </p>
                <p style={{ margin: '5px 0', color: '#7f8c8d', fontSize: '0.9rem' }}>
                  Address: {office.Address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
