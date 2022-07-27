import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Research from './pages/Research';
import Governance from './pages/Governance';
import Team from './pages/Team';
import Events from './pages/Events';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/team" element={<Team />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
