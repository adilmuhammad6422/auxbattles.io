import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "../game";

function VotingCards(props) {
    return (
        <div className="card my-2" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", backgroundColor: "#292031" }}>
            <Game index = {props.index}/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default VotingCards;
