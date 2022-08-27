
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import {useState} from 'react';
import Protect from './component/Protect';
function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(null)
  const logIn = ()=>{
        setIsLoggedIn(true)
  }
  const logOut = ()=>{
    setIsLoggedIn(false)
  }
  return (
    <div >
      <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='about' element={<About/>}></Route>
             <Route path='profile' element={<Protect
              isLoggedIn={isLoggedIn}
             >
              <Profile/>

             </Protect>}></Route>
          </Routes>
          {
            isLoggedIn?<button
            onClick={logOut}
            >Logout</button>:<button
             onClick={logIn}
            >Login</button>
          }
    </div>
  );
}

export default App;
