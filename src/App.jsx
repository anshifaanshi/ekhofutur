import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Realtors from "./Realtors";
import HomePage from "./working";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Realtors page */}
        <Route path="/realtors" element={<Realtors />} />
        <Route path="/working" element={<HomePage/>}></Route>
    
      </Routes>
    </Router>
  );
}

export default App;
