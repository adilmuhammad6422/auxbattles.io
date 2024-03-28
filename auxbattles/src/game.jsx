import React, { useState } from 'react';

function Game() {
  const [videoId1, setVideoId1] = useState('');
  const [videoId2, setVideoId2] = useState('');

  // Function to extract video ID from YouTube URL
  const extractVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      alert('Could not extract video ID. Please check the URL.');
      return '';
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const url1 = e.target.elements.url1.value;
    const url2 = e.target.elements.url2.value;
    setVideoId1(extractVideoID(url1));
    setVideoId2(extractVideoID(url2));
  };

  // Inline YouTubeEmbed component functionality
  const YouTubeEmbed = ({ videoId }) => (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url1" placeholder="Enter first YouTube URL" required />
        <input type="text" name="url2" placeholder="Enter second YouTube URL" required />
        <div className="button-container">
          <div className="button-wrapper left">
            <button type="submit">Load Videos</button>
          </div>
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          {videoId1 && <YouTubeEmbed videoId={videoId1} />}
        </div>
        <div style={{ flex: 1 }}>
          {videoId2 && <YouTubeEmbed videoId={videoId2} />}
        </div>
      </div>
    </div>
  );
}

export default Game;
