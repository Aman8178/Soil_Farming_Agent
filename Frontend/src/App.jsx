import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contactus from './components/Contactus';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course"
         element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/aboutus" element={<About/>}/>
       
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
