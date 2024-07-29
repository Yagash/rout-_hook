import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Ensure the import path is correct
import About from './About'; // Ensure the import path is correct
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>
       
      <div className='nav' >   <Link to="/">Home</Link>
          <br></br>
          <Link to="/about">About</Link>
          
          </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;
