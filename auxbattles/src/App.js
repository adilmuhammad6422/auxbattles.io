// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route/*, Link*/ } from 'react-router-dom';
import HomePage from './home';
import GamePage from './game';
import VotingPage from './voting';

function App() {
  return (
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
  );
}

export default App;
