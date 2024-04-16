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

function Category4() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
        const response = await axios.get('/votes');
        setVotes(response.data);  // Verify that response.data contains the correct format
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

  const clearVotes = async () => {
    try {
        await axios.post('/reset-category4-votes');
        fetchVotes();  // Make sure this is called to re-fetch updated vote counts
    } catch (error) {
        console.error('Error clearing votes:', error);
    }
};

  return (
    <div style={backgroundStyle}>
      <Heading />
      <div style={{ display: "flex", gap: "20px" }}>
        <VotingCards index  = {6}/>
        <VotingCards index  = {7}/>
      </div>
      <VotingChart vote1={votes[6]} vote2={votes[7]} />

      <div style={{ display: "flex", gap: "250px" }}>
        <button onClick={() => handleVote(6)} className="btn btn-primary" style={{ backgroundColor: 'rgb(255, 99, 132)', borderColor: '#ff0000' }}>Vote for Option 1</button>
        <button onClick={() => handleVote(7)} className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 162, 235)', borderColor: '#ff0000' }}>Vote for Option 2</button>
      </div>
      <button onClick={clearVotes} className="btn btn-danger" style={{ marginTop: '20px' }}>Clear Votes</button>
    </div>
  );
}

export default Category4;