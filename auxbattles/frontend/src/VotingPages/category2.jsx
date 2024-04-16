import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Heading from '../VotingComponents/Heading';
import VotingCards from "../VotingComponents/VotingCards";
import VotingChart from "../VotingComponents/VotingChart";

const backgroundStyle = {
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  backgroundColor: "#330066",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

function Category2() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
      const res = await axios.get('/votes');
      setVotes(res.data);
    } catch (error) {
      console.error('Error fetching votes:', error);
    }
  };

  const handleVote = async (option) => {
    try {
      await axios.post('/vote', { option });
      await fetchVotes();
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div style={backgroundStyle}>
      <Heading />
      <div style={{ display: "flex", gap: "20px" }}>
        <VotingCards />
        <VotingCards />
      </div>
      <VotingChart vote1={votes[2]} vote2={votes[3]} />

      <div style={{ display: "flex", gap: "250px" }}>
        <button onClick={() => handleVote(2)} className="btn btn-primary" style={{ backgroundColor: 'rgb(255, 99, 132)', borderColor: '#ff0000' }}>Vote for Option 1</button>
        <button onClick={() => handleVote(3)} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 162, 235)', borderColor: '#ff0000' }}>Vote for Option 2</button>
      </div>
    </div>
  );
}

export default Category2;
