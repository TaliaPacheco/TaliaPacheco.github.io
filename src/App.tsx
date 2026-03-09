import './styles/global.css';
import 'lenis/dist/lenis.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import LanguageToggle from './components/LanguageToggle';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000, display: 'flex', gap: '8px', alignItems: 'center' }}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
