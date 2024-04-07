import React from "react";
import Heading from '../VotingComponents/Heading';
import VotingCards from "../VotingComponents/VotingCards";
import VotingChart from "../VotingComponents/VotingChart";

const backgroundStyle = {
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  backgroundColor: "#330066",
  display: "flex",
  flexDirection: "column", // Stack children vertically
  alignItems: "center" // Center the content horizontally
};

function Category5() {
    return (
        <div style={backgroundStyle}>
            <Heading/>
            <div style={{ display: "flex", gap: "20px" }}>
                <VotingCards />
                <VotingCards />
            </div>
            <VotingChart/>
        </div>
    );
}

export default Category5;
