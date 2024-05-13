import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
//import Login from "./Pages/Login";
//import Register from "./Pages/Register";
//import ForgotPassword from "./Pages/Forgotpassword";
//import Home from './Admin/Home';
import Dashboard from './Admin/dashboard/Dashboard';


const App=()=> {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/reset-password" exact element={<ForgotPassword />}></Route> */}
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
   </>
  )
}
export default App