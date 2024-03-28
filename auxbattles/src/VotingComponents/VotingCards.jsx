import cardImage from "../futuristic.avif";
import 'bootstrap/dist/css/bootstrap.css'
function VotingCards() {
    const cardStyle = {
        width: "50rem",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // White outline
        margin: "10px" // Add some margin for better visibility of the outline
    };

    const imageStyle = {
        width: "100%",
        height: "auto", // Set height to auto to maintain aspect ratio
        objectFit: "cover" // Fit the image inside the container without distorting its aspect ratio
    };

    return (
        <div className="card" style={cardStyle}>
            <img src={cardImage} className="card-img-top" alt="Card" style={imageStyle} />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#e6ccff" className="btn btn-primary" style={{ backgroundColor: '#ff0000', borderColor: '#ff0000' }}>Go somewhere</a>
            </div>
        </div>
    );
}

export default VotingCards;

