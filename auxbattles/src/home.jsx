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
              <HomeCards category = "category1"/>
              <HomeCards category = "category2"/>
              <HomeCards category = "category3"/>
              <HomeCards category = "category4"/>
              <HomeCards category = "category5"/>
        </div>
    </div>
  );
}

export default Home;