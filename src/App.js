// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/About" className="link">About</NavLink></li>
        <li><NavLink to="/Contact" className="link">Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
