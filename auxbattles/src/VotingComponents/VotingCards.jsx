import cardImage from "../futuristic.avif";
import 'bootstrap/dist/css/bootstrap.css'
import Game from "../game";
function VotingCards() {
    const cardStyle = {
        width: "50rem",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", 
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
            <Game />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#e6ccff" className="btn btn-primary" style={{ backgroundColor: '#ff0000', borderColor: '#ff0000' }}>Vote for Option 1</a>
            </div>
        </div>
    );
}

export default VotingCards;

