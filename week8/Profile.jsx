// src/Profile.jsx
import React from "react";

// ✅ Child component using default props
function Profile({ name = "Guest", role = "Visitor" }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Welcome, {name} 👋</h2>
      <p>Role: {role}</p>
    </div>
  );
}

export default Profile;
