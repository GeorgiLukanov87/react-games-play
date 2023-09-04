import { useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = ({
    games,
    addComment,
}) => {
    const { gameId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: '',
    });

    const game = games.find(x => x._id === gameId)

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        const finalCommentResult = `${comment.comment}: ${comment.username}`;

        addComment(gameId, finalCommentResult);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt="no-game" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments?.map(x =>
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}

                    </ul>
                    {
                        !game.comments &&
                        <p className="no-comment">No comments.</p>
                    }

                </div>

                <div className="buttons">
                    <a className="button">
                        Edit
                    </a>
                    <a className="button">
                        Delete
                    </a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input onChange={onChange}
                        type="text"
                        name="username"
                        placeholder="Enter name..."
                        value={comment.username}
                    />

                    <textarea onChange={onChange}
                        name="comment"
                        placeholder="Comment..."
                        value={comment.comment}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />

                </form>
            </article>
        </section>
    );
};

export default GameDetails;