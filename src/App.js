import './App.css';
import Catalog from './components/catalog/Catalog';
import CreateGame from './components/createGame/CreateGame';
import Header from './components/header/Header'
import Home from './components/home/Home';

import { useEffect, useState } from "react";
import { getAll } from "./services/gameService";

import Login from './components/login/Login';
import Register from './components/register/Register'

import { Routes, Route } from 'react-router-dom'
import GameDetails from './components/gameDetails/GameDetails';
function App() {
    const [games, setGames] = useState([]);

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id === gameId);

            const comments = game.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== gameId),
                { ...game, comments },
            ]
        })
    }

    useEffect(() => {
        getAll().then(gamesResult => {
            console.log(gamesResult)
            setGames(gamesResult)
        });
    }, []);

    return (
        <div id="box">
            <Header />
            <main id="main-content">

                <Routes>
                    <Route path="/" element={<Home games={games} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateGame />} />
                    <Route path="/catalog" element={<Catalog games={games} />} />
                    <Route path="/catalog/:gameId" element={<GameDetails games={games} addComment={addComment} />} />
                </Routes>

            </main>
        </div>
    );
}

export default App;
