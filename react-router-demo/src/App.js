/*import {Routes,Route} from 'react-router-dom';
import {Home} from './learn/Home';
import {About} from './learn/About';
import {Navbar} from './learn/Navbar';*/
import React from 'react'
import logo from './logo.svg';
import './App.css';
import Hookcounter from './learn/Hookcounter';
function App() {
  return (
    /*<Navbar>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      </Routes>
    </Navbar>*/
    <Hookcounter/>
  )
}
export default App
