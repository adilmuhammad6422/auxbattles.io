import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route/*, Link*/ } from 'react-router-dom';
import HomePage from './home';
import GamePage from './game';
import VotingPage from './voting';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/message');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <Router>
        <div>
          {/*<nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/game">Game</Link> |{" "}
          <Link to="/vote">Vote</Link>
  </nav>*/}

          {/* Routes setup */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/vote" element={<VotingPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;