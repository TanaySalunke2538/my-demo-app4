import React from 'react';
import './Bumppups.css';

const Bumpups = () => {
  const bumps = [
    { id: 1, title: 'Feature 1', description: 'Amazing feature for your business' },
    { id: 2, title: 'Feature 2', description: 'Boost your productivity' },
    { id: 3, title: 'Feature 3', description: 'Save time and money' },
  ];

  return (
    <section className="bumpups">
      <h2>Why Choose Us</h2>
      <div className="bumpups-container">
        {bumps.map((bump) => (
          <div key={bump.id} className="bump-card">
            <h3>{bump.title}</h3>
            <p>{bump.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bumpups;
