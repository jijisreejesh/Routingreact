//Create Register page with fields for Email,Username,and password,then navigate to the login page.After logging in with 
//username and password.navigate to a navigation page with links to contact us,about and logout.Ensure all navigation works properly using 
//usenavigate
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';

import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import About from './components/About';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logout/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
