import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </main>

        </div>

    );
}

export default App;
