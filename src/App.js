import "./App.css";
import React from "react";
import First from "./Components/First";
import eden from "./eden.png";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img className="mt-5 justify-content-center" src={eden} alt="Logo" />
    

      <Router>
        <Routes>
          <Route path="/" exact element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
