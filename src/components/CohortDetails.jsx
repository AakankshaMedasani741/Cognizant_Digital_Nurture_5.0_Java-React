/**
 * @author Aakanksha Medasani
 * @email medasaniaakanksha01@gmail.com
 * @git https://github.com/Aakanksha cognizant-
 * © 2026 Aakanksha Medasani. All rights reserved.
 */
import React from 'react';
import styles from './CohortDetails.module.css';

const cohortData = [
  {
    id: 1,
    name: 'Cohort 1 - Java FSE',
    program: 'Digital Nurture 5.0',
    startDate: '2026-06-01',
    endDate: '2026-07-20',
    status: 'completed'
  },
  {
    id: 2,
    name: 'Cohort 2 - React Frontend',
    program: 'Upskilling Academy',
    startDate: '2026-07-15',
    endDate: '2026-09-05',
    status: 'ongoing'
  },
  {
    id: 3,
    name: 'Cohort 3 - Cloud & DevOps',
    program: 'Deep Skilling Program',
    startDate: '2026-08-01',
    endDate: '2026-09-15',
    status: 'ongoing'
  }
];

export default function CohortDetails() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Cohort Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cohortData.map(cohort => {
          // Color heading: green for ongoing, blue for other statuses
          const headingColor = cohort.status === 'ongoing' ? 'green' : 'blue';

          return (
            <div key={cohort.id} className={styles.box}>
              <h3 style={{ color: headingColor, margin: '0 0 15px 0', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
                {cohort.name}
              </h3>
              <dl>
                <dt>Program</dt>
                <dd>{cohort.program}</dd>
                <dt>Start Date</dt>
                <dd>{cohort.startDate}</dd>
                <dt>End Date</dt>
                <dd>{cohort.endDate}</dd>
                <dt>Status</dt>
                <dd style={{ textTransform: 'capitalize', fontWeight: 'bold', color: headingColor }}>
                  {cohort.status}
                </dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}
