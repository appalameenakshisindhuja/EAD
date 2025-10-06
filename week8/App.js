// src/App.jsx
import React from "react";
import Profile from "./Profile"; // ✅ Importing the Profile component

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌟 Default Props Demo</h1>

      {/* Passing both name and role */}
      <Profile name="Meenakshi" role="Frontend Developer" />

      {/* Passing only name (role uses default "Visitor") */}
      <Profile name="Sindhuja" />

      {/* Passing nothing (both use default values) */}
      <Profile />
    </div>
  );
}

export default App;
