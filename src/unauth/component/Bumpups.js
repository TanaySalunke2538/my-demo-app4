import React from 'react';
import './Bumpups.css';

const Bumpups = () => {
  const services = [
    { 
      id: 1,
      title: 'Local Video', 
      description: 'Improve your online visibility and drive organic traffic to your website.',
      icon: '🎥',
      bgColor: '#00000095'
    },
    { 
      id: 2, 
      title: 'Video Chat', 
      description: 'Targeted ads that drive qualified leads and maximize your ROI.',
      icon: '💬',
      bgColor: '#1c1a1a'

    },
    { 
      id: 3, 
      title: 'AI Youtube', 
      description: 'Build your brand presence and engage with your audience on social platforms.',
      icon: '🤖',
      bgColor: '#1f1f1f'
    },
    { 
      id: 4, 
      title: 'API Integration', 
      description: 'Reach your customers directly with personalized email campaigns.',
      icon: '⚙️',
      bgColor: '#00000095'
    },
  ];

  return (
    <section className="bumpups">
      <div className="bumpups-header">
        <h2>Do more with Bumpups</h2>
        <p>Process your videos to deliver insights across all industries. Ask Queries, request summaries, and get started with analysis and more with <a href="https://bumpups.com" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>bumpups.com</a></p>
      </div>
      
      <div className="bumpups-container">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bump-card"
            style={{ backgroundColor: service.bgColor }}
          >
            <div className="bump-card-content">
              <div className="bump-card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="bump-card-link">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bumpups;
