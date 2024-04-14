import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
    <NavBar handleSearch={(e)=>console.log(e.target.value)} />
    
    <Outlet />
    </div>
  );
}

export default App;
