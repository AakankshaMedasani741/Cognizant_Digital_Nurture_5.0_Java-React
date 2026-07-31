/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { Component } from 'react';

// Home class component
export class Home extends Component {
  render() {
    return (
      <div style={{ margin: '10px 0' }}>
        <h3>Welcome to the Home Page of Student Management Portal</h3>
      </div>
    );
  }
}

// About class component
export class About extends Component {
  render() {
    return (
      <div style={{ margin: '10px 0' }}>
        <h3>Welcome to the About Page of Student Management Portal</h3>
      </div>
    );
  }
}

// Contact class component
export class Contact extends Component {
  render() {
    return (
      <div style={{ margin: '10px 0' }}>
        <h3>Welcome to the Contact Page of Student Management Portal</h3>
      </div>
    );
  }
}

// Main StudentApp component rendering all three components
export default class StudentApp extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Student Management Portal</h2>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
          <Home />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}
