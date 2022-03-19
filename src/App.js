import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext'

import Home from './Views/Main/Home'
import About from './Views/Main/About'
import Contact from './Views/Main/Contact'
import HorizontalNavBar from './Components/NavBar/HorizontalNavBar';
import Projects from './Views/Main/Projects';


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
        <About/>
        <Projects/>
        <Contact/>
      </Router>
    </ThemeProvider>
  );
}

export default App;