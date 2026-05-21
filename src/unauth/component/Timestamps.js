import React, { useState } from 'react';
import './Timestamps.css';

const Timestamps = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!videoUrl.trim()) {
      alert('Please enter a YouTube video URL');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Timestamps generated! (This is a demo)');
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <section className="timestamps">
      <div className="timestamps-container">
        {/* Header Section */}
        <div className="timestamps-header">
          <h2>AI YouTube Timestamps</h2>
          <p>
            Generates timestamps for a given YouTube video using the bump-1.0 model. This software was built using the AI— watch tutorials how to <a href="#" className="timestamps-link">here</a>.
          </p>
        </div>

        {/* Input Section */}
        <div className="timestamps-input-wrapper">
          <div className="timestamps-input-group">
            <span className="input-icon">🔗</span>
            <input
              type="text"
              id="youtube-url"
              name="youtube-url"
              className="timestamps-input"
              placeholder="Enter YouTube video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              onKeyPress={handleKeyPress}
/>
            <button 
              className="timestamps-button"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="timestamps-divider"></div>
      </div>
    </section>
  );
};

export default Timestamps;
