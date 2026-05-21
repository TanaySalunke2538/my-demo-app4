import React from 'react';
import './Bumpups.css';

const Bumpups = () => {
  const services = [
    { 
      id: 1, 
      title: 'Search engine optimization', 
      description: 'Improve your online visibility and drive organic traffic to your website.',
      icon: '🔍',
      bgColor: '#f0f0f0'
    },
    { 
      id: 2, 
      title: 'Pay-per-click advertising', 
      description: 'Targeted ads that drive qualified leads and maximize your ROI.',
      icon: '🖱️',
      bgColor: '#b3ff00'
    },
    { 
      id: 3, 
      title: 'Social Media Marketing', 
      description: 'Build your brand presence and engage with your audience on social platforms.',
      icon: '📱',
      bgColor: '#1a1a1a'
    },
    { 
      id: 4, 
      title: 'Email Marketing', 
      description: 'Reach your customers directly with personalized email campaigns.',
      icon: '✉️',
      bgColor: '#f0f0f0'
    },
  ];

  return (
    <section className="bumpups">
      <div className="bumpups-header">
        <h2>Bumpups</h2>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include: <a href="https://bumpups.com" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>bumpups.com</a></p>
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
