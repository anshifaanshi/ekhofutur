import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Realtors from "./Realtors";
import HomePage from "./working";
import Ev from "./Ev";
import RedirectPage from "./RedirectPage";
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
    <Route path="/solar" element={<RedirectPage />} />
        <Route path="/pureflow" element={<RedirectPage />} />
        <Route path='/it' element={<RedirectPage/>}/>
        <Route path='/coworking' element={<RedirectPage/>}/>
        <Route path='/wellnes' element={<RedirectPage/>}/>
        <Route path='/ekhora' element={<RedirectPage/>}/>
        <Route path='/compliment' element={<RedirectPage/>}/>
        <Route path='/homeappliances' element={<RedirectPage/>}/>
        <Route path='/speech' element={<RedirectPage/>}/>
        <Route path='/lubnas' element={<RedirectPage/>}/>
        <Route path='/trendsetter' element={<RedirectPage/>}/>
        <Route path='/oldschool' element={<RedirectPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
