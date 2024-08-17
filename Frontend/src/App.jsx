import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contactus from './components/Contactus';
import About from './components/About';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/aboutus" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
