import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from "./futuristic.avif";
import { Link } from "react-router-dom";
import HomeCards from "./HomeComponents/HomeCards";

function Start() {
  const backgroundStyle = {
    backgroundColor: "#330066",
    minHeight: "100vh",
    margin: 0,
    padding: 0
  };

  const textStyle = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    color: "white",
    borderRadius: "5px",
    padding: "200px 0px 0px 0px"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px", // Add margin to separate buttons from text
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "2px solid white",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "0 10px", // Add margin between buttons
    fontFamily: "Courier New",
  };

  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    checkGameStatus();
  }, []);

  const checkGameStatus = async () => {
    try {
      const response = await axios.get('/api/game-status');
      setGameActive(response.data.active); // assuming 'active' is a boolean returned by the API
    } catch (error) {
      console.error('Failed to fetch game status:', error);
    }
  };

  const startGame = async () => {
    try {
      await axios.post('/api/start-game');
      setGameActive(true);
    } catch (error) {
      console.error('Failed to start game:', error);
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={textStyle}>
        <h1 style={{ fontFamily: "Courier New" }}>A</h1>
        <h3 style={{ fontFamily: "Courier New" }}>UX</h3>
        <h1 style={{ fontFamily: "Courier New" }}>B</h1>
        <h3 style={{ fontFamily: "Courier New" }}>ATTLES</h3>
        <h1 style={{ fontFamily: "Courier New" }}>.IO</h1>
      </div>
      <div style={buttonContainerStyle}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>Join Game</button>
        </Link>
        </div>
    </div>
  );
}

export default Start;