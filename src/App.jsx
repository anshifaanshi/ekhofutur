import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Realtors from "./Realtors";
import HomePage from "./working";
import Ev from "./Ev";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Realtors page */}
        <Route path="/realtors" element={<Realtors />} />
        <Route path="/working" element={<HomePage/>}></Route>
    <Route path="/ev" element={<Ev/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
