import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route/*, Link*/ } from 'react-router-dom';
import HomePage from './home';
import GamePage from './game';
import Category1 from './VotingPages/category1';
import Category3 from './VotingPages/category3';
import Category4 from './VotingPages/category4';
import Category5 from './VotingPages/category5';
import Category2 from './VotingPages/category2';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('/message');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <Router>
        <div>
          {/* Routes setup */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/Pop" element={<Category1 />} />
            <Route path="/HipHop" element={<Category2 />} />
            <Route path="/Rock" element={<Category3 />} />
            <Route path="/Metal" element={<Category4 />} />
            <Route path="/Indie" element={<Category5 />} />


          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;