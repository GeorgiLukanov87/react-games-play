import { useEffect, useState } from "react";
import { getAll } from "../../services/gameService";
import AllGames from "./allGames/allGames";


const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAll().then(gamesResult => {
            console.log(gamesResult)
            setGames(gamesResult)
        });
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">

                {games.length > 0
                    ? <h1>Latest Games</h1>
                    : <p className="no-articles">No games yet</p>}

                {games.map(x => <AllGames key={x._id} game={x} />)}



            </div>
        </section>
    );
};

export default Home;