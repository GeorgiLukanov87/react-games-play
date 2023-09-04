
import AllGames from "./allGames/allGames";

const Home = (props) => {

    const { games } = props

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
                    : <p className="no-articles">No games yet</p>
                }
                
                {games.map(x => <AllGames key={x._id} game={x} />)}

            </div>
        </section>
    );
};

export default Home;