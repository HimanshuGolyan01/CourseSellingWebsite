import React from "react";
import Dashboard from "./Pages/Dashboard";
import Signinadmin from "./Pages/Signinadmin";
import Signupadmin from "./Pages/Signupadmin";
import Signupuser from "./Pages/Signupuser";
import Signinuser from "./Pages/Signinuser";
import AdminHome from "./Pages/AdminHome";
import UserHome from "./Pages/UserHome";
import Uploadcourse from "./Pages/Uploadcourse";
import PurchaseCourse from "./pages/PurchaseCourse"
import MyCourses from "./Pages/MyCourses";
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
        <Route path='/AdminHome' element={<AdminHome/>} />
        <Route path='/UserHome' element={<UserHome/>} />
        <Route path='/Uploadcourse' element={<Uploadcourse/>} />
        <Route path='/PurchaseCourse' element={<PurchaseCourse/>} />
        <Route path='/MyCourses' element={<MyCourses/>} />
      

      </Routes>
    </Router>
  );
}

export default App;

