import { useState } from 'react';
import React from 'react'
import './App.css';
// import Alert from './components/Alert';   not completed
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Outlet,
//   //  Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Wheather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar Title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar /> */}
      {/*<Alert alert = "This is alert"/> */}      {/* not completed*/}

      {/* <Router> */}
        <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path='/tekhub' > */}
                {/* <Route path="components/TextForm" element={ */}
                  <TextForm heading="Enter the text below to Analyze" mode={mode} />
                  
                {/* <Route path="components/About" element={<About />} /> */}
                
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
