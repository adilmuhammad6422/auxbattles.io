import React from "react"; // Added React import

function Heading() {
    const textStyle = {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        color: "white",
        borderRadius: "1px",
        fontSize: "2.2vw" // Adjust this value according to your preference
    };

    return (

        <div style={textStyle}>
            <h1 style={{ fontFamily: "Courier New" }}>V</h1>
            <h3 style={{ fontFamily: "Courier New" }}>oting</h3>
        </div>
    );
}

export default Heading;
