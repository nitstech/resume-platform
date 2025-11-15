import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Signup</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    background: "#222",
    padding: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
