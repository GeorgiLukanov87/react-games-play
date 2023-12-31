import { Link } from "react-router-dom";

const CatalogItem = (props) => {

    const {game} = props

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt="no-game"/>
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/catalog/${game._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CatalogItem;
