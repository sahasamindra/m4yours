import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Output from "./Pages/Output/Output";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/*" element={<Output />} />
    </Routes>
  );
}

export default App;
