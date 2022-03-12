import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Main/Home'
import Project from './Views/Main/About'
import Contact from './Views/Main/Contact'
import HorizontalNavBar from './Components/NavBar/HorizontalNavBar';
import { ThemeProvider } from './Context/ThemeContext'
function App() {
  return (
    // Mermaid Lagoon
    // Tealeave Green
    // Window Tide
    // ON CANVA
    <ThemeProvider>
      <Router>
        <Home/>
        <HorizontalNavBar/>
        <Project/>
        <Contact/>
      </Router>
    </ThemeProvider>
  );
}

export default App;