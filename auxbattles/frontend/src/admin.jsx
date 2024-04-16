import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
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
        {gameActive ? (
          <div style={{ marginTop: '20px', color: 'white', fontSize: '24px' }}>
            Game has been created
          </div>
        ) : (
          <div style={{ marginTop: '20px', color: 'white', fontSize: '24px' }}>
          Game has been started
        </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
