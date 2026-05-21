import React, { useState } from 'react';
import './Timestamps.css';

const Timestamps = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');

  const extractVideoId = (url) => {
    const regexes = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const regex of regexes) {
      const match = url.match(regex);
      if (match) return match[1];
    }
    return null;
  };

  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i;
    return youtubeRegex.test(url);
  };

  const fetchVideoDetails = async (videoId) => {
    try {
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
      if (!apiKey) {
        setError('YouTube API key not configured');
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoId}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch video details');
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setError('Video not found');
        setVideoData(null);
        return;
      }

      const item = data.items[0];
      const snippet = item.snippet;

      setVideoData({
        title: snippet.title,
        thumbnail: snippet.thumbnails.maxres?.url || 
                   snippet.thumbnails.high?.url || 
                   snippet.thumbnails.medium?.url,
        videoId: videoId,
      });
      setError('');
    } catch (err) {
      setError(err.message);
      setVideoData(null);
    }
  };

  const handleGenerate = async () => {
    if (!videoUrl.trim()) {
      setError('Please enter a YouTube video URL');
      return;
    }
    if (!isValidYouTubeUrl(videoUrl)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      setError('Could not extract video ID from URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setVideoData(null);

    await fetchVideoDetails(videoId);

    setIsLoading(false);
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
              onChange={(e) => {
                setVideoUrl(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="timestamps-button"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? 'Fetching...' : 'Generate'}
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="timestamps-error">{error}</div>}

          {/* Video Details */}
          {videoData && (
            <div className="timestamps-video-display">
              <div className="video-thumbnail-wrapper">
                <img 
                  src={videoData.thumbnail} 
                  alt={videoData.title}
                  className="video-thumbnail"
                />
              </div>
              <h3 className="video-title">{videoData.title}</h3>
            </div>
          )}
        </div>

        {/* Divider */}
        {videoData && <div className="timestamps-divider"></div>}
      </div>
    </section>
  );
};

export default Timestamps;
