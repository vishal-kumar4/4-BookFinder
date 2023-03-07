import './App.css';
import Quotes from './Quotes.js'
import arr from './happy'
import img from './images/boookicon.png'
import Mainpage from './pages/Mainpage'

import Reccomended from './pages/Recommendation'
import Library from './pages/Library';
import Login from './pages/Login';
// import Random from './pages/Random';
import Libsignup from './pages/Libsignup';
import Liblogin from './pages/Liblogin';
import AuthorizedLib from './pages/AuthorizedLib';
import AdminSearch from './pages/AdminSearch';
import Search from './pages/Search'
import B from './pages/B'
// import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div className='DadaClass'>

        {/* Navbar  */}
        <div className="container_nav">
          <h3 className='heads'> <Link to='/'>
             <img src={img} alt="/" /><strong>Book </strong> <span>Finder</span> </Link></h3>
          <div className="btn-group dropend" id='signup'>
            <button type="button" className="btn btn-secondary dropdown-toggle" id='signupbtn' data-bs-toggle="dropdown" aria-expanded="true">
              <p>Authorized View</p>
            </button>
            <ul className="dropdown-menu">
              {/* <li><Link className="dropdown-item" to="/login">Sign In</Link></li> */}
              {/* <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li> */}
              <li><Link className="dropdown-item" to="/libsign">Sign Up</Link></li>
              <li><Link className="dropdown-item" to="/liblogin">Sign In</Link></li>
              {/* <li><Link className="dropdown-item" to="/libsign">Library Sign Up</Link></li> */}
            </ul>
          </div>
        </div>


        {/*Routing   */}
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/lib" element={<Library />}/>
          <Route path="/rec/*" element={<Reccomended />}/>
          {/* <Route path="/ran" element={<Random />}/> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Login />}/>
          <Route path="/libsign" element={<Libsignup />}/>
          <Route path="/liblogin" element={<Liblogin />}/>
          <Route path="/authorizedLib/*" element={<AuthorizedLib/>}/>
          <Route path="/AdminSearch" element={<AdminSearch/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/b" element={<B/>}/>
        </Routes>


        {/* Random Quotes */}
        <div className="bottom_quotes">
        < Quotes texts={arr[Math.floor((Math.random() * 14) + 1)]}></Quotes>
        </div>


      </div>
    </Router>
  );
}


