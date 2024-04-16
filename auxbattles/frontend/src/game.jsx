import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game(props) {
    const [videoId1, setVideoId1] = useState('');

    useEffect(() => {
        fetchUrl();
    }, []);

    const fetchUrl = async () => {
        try {
            const response = await axios.get('/urls');
            console.log('Response:', response); // Log the response
            const fetchedUrls = response.data;
            if (Array.isArray(fetchedUrls) && fetchedUrls.length > props.index) {
                const url = fetchedUrls[props.index];
                setVideoId1(extractVideoID(url));
            } else {
                console.error('Error: URLs array is empty or index is out of bounds');
            }
        } catch (error) {
            console.error('Error fetching URL:', error);
        }
    };
    
    
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url1 = e.target.elements.url1.value;
        try {
            await axios.post('/addurl', { index: props.index, newUrl: url1 });
            setVideoId1(extractVideoID(url1));
        } catch (error) {
            console.error('Error adding URL:', error);
        }
    };

    // Inline YouTubeEmbed component functionality
    const YouTubeEmbed = ({ videoId }) => (
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
        <div className="container-fluid p-4">
            <form onSubmit={handleSubmit} className="row mb-3">
                <div className="col-12 col-lg mb-2 mb-lg-0">
                    <input
                        type="text"
                        name="url1"
                        placeholder="Enter first YouTube URL"
                        required
                        className="form-control me-2"
                    />
                </div>
                <div className="col-12 col-lg-auto">
                    <button type='submit' className="btn btn-primary w-100">
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
