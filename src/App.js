import './App.css';
import About from "./About"
import Work from "./Work"
import Phone from "./Phone"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
          <Link className='navbar-link' to="/about">About</Link> 
          </li>
          <li className='navbar-item'>
          <Link className='navbar-link' to="/work">Work</Link> 
          </li>
          <li className='navbar-item'>
          <Link className='navbar-link' to="/phone">Phone</Link> 
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/phone' element={ <Phone />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
