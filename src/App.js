import './App.css';
import Catalog from './components/catalog/Catalog';
import CreateGame from './components/createGame/CreateGame';
import Header from './components/header/Header'
import Home from './components/home/Home';
import AllGames from './components/home/allGames/allGames';

import Login from './components/login/Login';
import Register from './components/register/Register'

import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateGame />} />
                    <Route path="/catalog" element={<Catalog />} />

                </Routes>

            </main>
        </div>
    );
}

export default App;
