import React from 'react';
import './Timestamps.css';

const Timestamps = () => {
  const events = [
    { id: 1, date: 'Jan 2026', event: 'Project Started' },
    { id: 2, date: 'Mar 2026', event: 'Beta Release' },
    { id: 3, date: 'May 2026', event: 'Official Launch' },
  ];

  return (
    <section className="timestamps">
      <h2>Timeline</h2>
      <div className="timeline">
        {events.map((event) => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{event.event}</h3>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timestamps;
