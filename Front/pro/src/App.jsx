import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./admin/Login";
import Register from "./admin/Register";
import ForgotPassword from "./admin/Resetpassword";

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/reset-password" exact element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}
