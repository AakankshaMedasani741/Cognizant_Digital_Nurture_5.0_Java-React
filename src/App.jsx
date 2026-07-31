/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { useState } from 'react';
import './App.css';
import MyFirstReact from './components/MyFirstReact';
import StudentApp from './components/StudentApp';
import ScoreCalculatorDemo from './components/ScoreCalculator';
import BlogAppDemo from './components/BlogApp';
import CohortDetails from './components/CohortDetails';
import CricketApp from './components/CricketApp';
import OfficeSpaceRental from './components/OfficeSpaceRental';
import EventExamples from './components/EventExamples';
import TicketBooking from './components/TicketBooking';
import BloggerApp from './components/BloggerApp';

const exercises = [
  { id: 'ex1', title: 'Exercise 1: My First React', component: <MyFirstReact /> },
  { id: 'ex2', title: 'Exercise 2: Student App', component: <StudentApp /> },
  { id: 'ex3', title: 'Exercise 3: Score Calculator', component: <ScoreCalculatorDemo /> },
  { id: 'ex4', title: 'Exercise 4: Blog App', component: <BlogAppDemo /> },
  { id: 'ex5', title: 'Exercise 5: Cohort Details', component: <CohortDetails /> },
  { id: 'ex9', title: 'Exercise 9: Cricket App', component: <CricketApp /> },
  { id: 'ex10', title: 'Exercise 10: Office Rental', component: <OfficeSpaceRental /> },
  { id: 'ex11', title: 'Exercise 11: Event Examples', component: <EventExamples /> },
  { id: 'ex12', title: 'Exercise 12: Ticket Booking', component: <TicketBooking /> },
  { id: 'ex13', title: 'Exercise 13: Blogger App', component: <BloggerApp /> },
];

function App() {
  const [activeTab, setActiveTab] = useState('ex1');

  const activeExercise = exercises.find(ex => ex.id === activeTab) || exercises[0];

  return (
    <div className="app-container">
      {/* Banner Header with User Details */}
      <header className="app-header">
        <div className="header-left">
          <h1>Cognizant Deepskilling</h1>
          <p className="subtitle">Java FSE React - Week 9 (Module 9: React SPA & Module 10: Debugging)</p>
        </div>
        <div className="header-right">
          <div className="user-badge">
            <span className="user-name">Aakanksha Medasani</span>
            <span className="user-email">medasaniaakanksha01@gmail.com</span>
            <span className="user-git">Aakanksha cognizant-</span>
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="app-main">
        {/* Sidebar Nav */}
        <nav className="app-sidebar">
          <h3 className="nav-title">Select Exercises</h3>
          <ul className="nav-list">
            {exercises.map(ex => (
              <li key={ex.id}>
                <button
                  className={`nav-item ${activeTab === ex.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(ex.id)}
                >
                  {ex.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Viewer area */}
        <main className="app-content">
          <div className="content-header">
            <h2>{activeExercise.title}</h2>
          </div>
          <div className="content-body">
            {activeExercise.component}
          </div>
        </main>
      </div>

      {/* App Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Aakanksha Medasani. All rights reserved. | Code marked with ownership metadata.</p>
      </footer>
    </div>
  );
}

export default App;
