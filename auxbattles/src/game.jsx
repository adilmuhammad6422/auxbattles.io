import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Game() {
  const [videoId1, setVideoId1] = useState('');

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
    setVideoId1(extractVideoID(url1));
  };

  // Inline YouTubeEmbed component functionality
  const YouTubeEmbed = ({ videoId }) => (
    <iframe
      width="750"
      height="350"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  );

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'flex-end', marginLeft: 30 }}>
        <input type="text" name="url1" placeholder="Enter first YouTube URL" required style={{marginRight: 450, marginTop: 25, justifyContent: 'right', backgroundColor: '#6B6373'}} />
        <div className="button-container">
          <div className="button-wrapper">
            <button type = 'submit' href="#e6ccff" className="btn btn-primary" style={{ backgroundColor: '#6B27A4', borderColor: '#ff0000' }}>Add Video</button>
          </div>
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: 25}}>
        <div style={{ flex: 1}}>
          {videoId1 && <YouTubeEmbed videoId={videoId1} />}
        </div>
      </div>
    </div>
  );
}

export default Game;
