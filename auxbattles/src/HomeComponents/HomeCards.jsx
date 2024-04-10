import cardImage from "../futuristic.avif";
import 'bootstrap/dist/css/bootstrap.css'
import HomeChart from "./HomeChart";
import { Link } from "react-router-dom";

function HomeCards({vote1, vote2, category}) {
    const cardStyle = {
        width: "18rem",
        height: "22rem",
        boxShadow: "0 0 1px rgba(255, 255, 255, 0.5)", 
        margin: "10px",
        backgroundColor: "#292031"
    };

    const imageStyle = {
        width: "100%",
        height: "auto", 
        objectFit: "cover" 
    };

    return (
        <div className="card" style={cardStyle}>

            <div className="card-body" >
                <HomeChart vote1 = {vote1} vote2 = {vote2}/>
                <Link to={`/${category}`}>Go to {category}</Link>
            </div>
        </div>
    );
}

export default HomeCards;


