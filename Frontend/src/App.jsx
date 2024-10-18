import React from "react";
import Dashboard from "./Pages/Dashboard";
import Signinadmin from "./Pages/Signinadmin";
import Signupadmin from "./Pages/Signupadmin";
import Signupuser from "./Pages/Signupuser";
import Signinuser from "./Pages/Signinuser";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/signinadmin' element={<Signinadmin />} />
        <Route path='/signupadmin' element={<Signupadmin/>} />
        <Route path='/signupuser' element={<Signupuser/>} />
        <Route path='/signinuser' element={<Signinuser/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

