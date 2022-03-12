import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Main/Home'
import Project from './Views/Main/About'
import Contact from './Views/Main/Contact'
import HorizontalNavBar from './Components/NavBar/HorizontalNavBar';
function App() {
  return (
    // Mermaid Lagoon
    // Tealeave Green
    // Window Tide
    // ON CANVA
      <Router>
        <Home/>
        <HorizontalNavBar/>
        <Project/>
        <Contact/>
        {/* <div id='contact'>

        </div> */}
      </Router>
  );
}

export default App;