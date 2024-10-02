import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Mediaqueries.css"
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
    </>
  );
}

export default App;
