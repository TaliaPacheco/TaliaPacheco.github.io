import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <Router>
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <LanguageToggle />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
