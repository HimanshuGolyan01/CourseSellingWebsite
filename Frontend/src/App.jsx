import React from "react";
import Dashboard from "./Pages/Dashboard";
import Signinadmin from "./Pages/Signinadmin";
import Signupadmin from "./Pages/Signupadmin";
import Signupuser from "./Pages/Signupuser";
import Signinuser from "./Pages/Signinuser";
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
      </Routes>
    </Router>
  );
}

export default App;

