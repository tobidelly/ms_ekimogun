import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event2025 from './pages/Event2025';
import History from './pages/History';
import Culture from './pages/Culture';
import Team from './pages/Team';
import ContestantRegistration from './components/ContestantRegistration';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2025" element={<Event2025 />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register2025" element={<ContestantRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;