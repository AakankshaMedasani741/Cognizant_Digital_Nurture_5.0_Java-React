/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React, { useState } from 'react';

// Mock Players List
const initialPlayers = [
  { name: 'Virat Kohli', score: 110 },
  { name: 'Rohit Sharma', score: 85 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Rishabh Pant', score: 68 },
  { name: 'Hardik Pandya', score: 72 },
  { name: 'Ravindra Jadeja', score: 55 },
  { name: 'Jasprit Bumrah', score: 12 },
  { name: 'Mohammed Shami', score: 8 },
  { name: 'Yuzvendra Chahal', score: 4 },
  { name: 'Shubman Gill', score: 95 },
  { name: 'Shreyas Iyer', score: 62 }
];

// Indian Players for Destructuring (11 players)
const indianPlayersList = [
  'Virat Kohli',
  'Rohit Sharma',
  'KL Rahul',
  'Rishabh Pant',
  'Hardik Pandya',
  'Ravindra Jadeja',
  'Jasprit Bumrah',
  'Mohammed Shami',
  'Yuzvendra Chahal',
  'Shubman Gill',
  'Shreyas Iyer'
];

// Merge Arrays
const T20players = ['Virat Kohli', 'Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah'];
const RanjiTrophyPlayers = ['Abhimanyu Easwaran', 'Sarfaraz Khan', 'Yash Dayal', 'Rinku Singh'];

// Helper component 1: List of Players
export function ListofPlayers({ players }) {
  // Filter players with scores >= 70 using arrow functions
  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
      <h3>All Players and Scores</h3>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            {player.name} - <strong>{player.score}</strong> Runs
          </li>
        ))}
      </ul>
      <h3 style={{ color: 'forestgreen', marginTop: '20px' }}>High Scorers (Score &ge; 70)</h3>
      <ul>
        {highScorers.map((player, idx) => (
          <li key={idx}>
            {player.name} - <strong>{player.score}</strong> Runs
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper component 2: IndianPlayers
export function IndianPlayers() {
  // Destructuring players
  // odd indices: 1, 3, 5, 7, 9
  // even indices: 0, 2, 4, 6, 8, 10
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh] = indianPlayersList;
  
  const evenTeam = [first, third, fifth, seventh, ninth, eleventh];
  const oddTeam = [second, fourth, sixth, eighth, tenth];

  // Merge using Spread Operator
  const allMergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
      <h3>Indian Team Selection (Destructured)</h3>
      <div>
        <strong>Even Team Players:</strong>
        <ul>
          {evenTeam.map((p, idx) => <li key={idx}>{p}</li>)}
        </ul>
      </div>
      <div style={{ marginTop: '15px' }}>
        <strong>Odd Team Players:</strong>
        <ul>
          {oddTeam.map((p, idx) => <li key={idx}>{p}</li>)}
        </ul>
      </div>

      <h3 style={{ marginTop: '25px' }}>Merged Players List (T20 + Ranji Trophy)</h3>
      <ul>
        {allMergedPlayers.map((p, idx) => <li key={idx}>{p}</li>)}
      </ul>
    </div>
  );
}

export default function CricketApp() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Cricket App</h2>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFlag(true)} 
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px', 
            background: flag ? '#3498db' : '#f1f2f6', 
            color: flag ? '#fff' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show List of Players (Flag = True)
        </button>
        <button 
          onClick={() => setFlag(false)} 
          style={{ 
            padding: '10px 20px', 
            background: !flag ? '#3498db' : '#f1f2f6', 
            color: !flag ? '#fff' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Show Indian & Merged Players (Flag = False)
        </button>
      </div>

      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        {flag ? (
          <ListofPlayers players={initialPlayers} />
        ) : (
          <IndianPlayers />
        )}
      </div>
    </div>
  );
}
