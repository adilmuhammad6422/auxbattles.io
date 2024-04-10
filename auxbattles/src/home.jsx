import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from "./futuristic.avif";
import { Link } from "react-router-dom";
import HomeCards from "./HomeComponents/HomeCards";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
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

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
      const res = await axios.get('http://localhost:8080/votes');
      setVotes(res.data);
    } catch (error) {
      console.error('Error fetching votes:', error);
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

      <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
              <HomeCards vote1={votes[0]} vote2 = {votes[1]} category = "category1"/>
              <HomeCards vote1={votes[2]} vote2 = {votes[3]} category = "category2"/>
              <HomeCards vote1={votes[4]} vote2 = {votes[5]} category = "category3"/>
              <HomeCards vote1={votes[6]} vote2 = {votes[7]} category = "category4"/>
              <HomeCards vote1={votes[8]} vote2 = {votes[9]} category = "category5"/>
        </div>
    </div>
  );
}

export default Home;