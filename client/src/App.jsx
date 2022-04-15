import { useState } from "react";
import Navbar from "./Header/Navbar";
import Login from "./Body/Login/Login";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login/>
    </div>
  );
}

export default App;
