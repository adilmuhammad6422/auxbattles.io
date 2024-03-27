import backgroundImage from "./futuristic.avif";
import { Link } from "react-router-dom";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
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
        <Link to="/">
          <button style={buttonStyle}>Home</button>
        </Link>
        <Link to="/game">
          <button style={buttonStyle}>Game</button>
        </Link>
        <Link to="/vote">
          <button style={buttonStyle}>Vote</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;