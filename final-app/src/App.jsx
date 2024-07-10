import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Completed from "/src/components/Completed";
import Active from "/src/components/Active.jsx";
import All from "/src/components/All.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default App;
