import React from "react";
import ReactDOM from "react-dom/client";
import {APIContextProvder}from './Context/contextApi'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HeaderComp from "./Components/HeaderComp";
import "./Components/style.css"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <APIContextProvder>
        <Routes>
          <Route element={<SignUp/>} path="/signup" />
          <Route element={<SignIn/>} path="/" />
          <Route element={ localStorage.getItem("token") ? ( <HeaderComp/>  ) : ( <Navigate replace to={"/"} /> ) } path="/headercomp" />
        </Routes>
      </APIContextProvder>
    </Router>
  </React.StrictMode>
);