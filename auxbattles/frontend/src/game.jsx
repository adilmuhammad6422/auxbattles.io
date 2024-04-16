import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        // Removed the max-width style to allow the video to be as wide as the column allows
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
        </div>
    );

    return (
        <div className="container-fluid p-4">  {/* Use container-fluid for full width */}
            <form onSubmit={handleSubmit} className="row mb-3">  {/* Use mb-* for bottom margin */}
                <div className="col-12 col-lg">  {/* Use full width on small screens and flexible width on larger screens */}
                    <input
                        type="text"
                        name="url1"
                        placeholder="Enter first YouTube URL"
                        required
                        className="form-control me-2 mb-2 mb-lg-0"  // mb-* classes to add bottom margin on small screens
                    />
                </div>
                <div className="col-12 col-lg-auto">  {/* Auto width for the button on large screens */}
                    <button type='submit' className="btn btn-primary w-100">  {/* w-100 to make the button full width */}
                        Add Video
                    </button>
                </div>
            </form>
            <div className="row">
                <div className="col">
                    {videoId1 && <YouTubeEmbed videoId={videoId1} />}
                </div>
            </div>
        </div>
    );
}

export default Game;
