import './App.css';
import uniqid from 'uniqid'

import Catalog from './components/catalog/Catalog';
import CreateGame from './components/createGame/CreateGame';
import Header from './components/header/Header'
import Home from './components/home/Home';
import GameDetails from './components/gameDetails/GameDetails';

import Login from './components/login/Login';
import Register from './components/register/Register'

import { useEffect, useState } from "react";
import { getAll } from "./services/gameService";

import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext';


function App() {
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const addGameHandler = (gameData) => {
        setGames(oldGames => [
            ...oldGames,
            {
                ...gameData,
                _id: uniqid(),
            },
        ]);

        navigate('/catalog')
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id === gameId);

            const comments = game.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== gameId),
                { ...game, comments },
            ]
        });

    }

    useEffect(() => {
        getAll().then(gamesResult => {
            console.log(gamesResult)
            setGames(gamesResult)
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user: auth, userLogin }}>
            <div id="box">
                <Header />
                <main id="main-content">

                    <Routes>
                        <Route path="/" element={<Home games={games} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<CreateGame addGameHandler={addGameHandler} />} />
                        <Route path="/catalog" element={<Catalog games={games} />} />
                        <Route path="/catalog/:gameId" element={<GameDetails games={games} addComment={addComment} />} />
                    </Routes>

                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
