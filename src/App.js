import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Login from "./Login/Login"
import './App.css'

const App = () => {
  return (
    <div>
     
    <BrowserRouter>
  
     <Login/>
    </BrowserRouter>
    </div>
  );
};

export default App;
