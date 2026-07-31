/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal.toFixed(2) + '%');
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1><font color="Brown">Student Details:</font></h1>
    <div className="Name">
      <b> <span>Name: </span> </b>
      <span>{Name}</span>
    </div>
    <div className="School">
      <b> <span>School: </span> </b>
      <span>{School}</span>
    </div>
    <div className="Total">
      <b><span>Total: </span></b>
      <span>{total} </span>
      <span>Marks</span>
    </div>
    <div className="Score">
      <b>Score: </b>
      <span>
        {calcScore(total, goal)}
      </span>
    </div>
  </div>
);

export default function ScoreCalculatorDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <CalculateScore
        Name="Steeve"
        School="DNV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}
