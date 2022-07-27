import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import NavBar from "./components/NavBar";

import Home from "./pages/Home"
import Research from "./pages/Research"
import Governance from "./pages/Governance"
import Team from "./pages/Team"
import Events from "./pages/Events"

import './App.css'

function App() {

  return (
    <Container className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="/governance" element={<Governance/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
    </BrowserRouter>    
    </Container>
  );
}

export default App;
