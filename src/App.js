import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, themes, useTheme } from './Context/ThemeContext'
import { DocProvider } from './Context/DocContext'

import Home from './Views/Main/Home'
import About from './Views/Main/About'
import Contact from './Views/Main/Contact'
import HorizontalNavBar from './Components/NavBar/HorizontalNavBar';
import Projects from './Views/Main/Projects';
import BackGroundCarou from './Components/Carousel/BackGroundCarou';


function App() {
  return (
    // Mermaid Lagoon
    // Tealeave Green
    // Window Tide
    // ON CANVA
    <DocProvider>
      <ThemeProvider>
        <Router>
          <BackGroundCarou>
            <Home id = {'home'}/>
            <HorizontalNavBar/>
            <About/>
            <Projects/>
            <Contact/>
          </BackGroundCarou>
        </Router>
      </ThemeProvider>
    </DocProvider>
  );
}

export default App;