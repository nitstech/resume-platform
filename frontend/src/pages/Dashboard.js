import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // check if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // redirect if not logged in
    } else {
      // (Later) fetch user info from backend using token
      setUser({ name: "Nitesh Gupta", email: "nitesh@example.com" }); // temporary mock data
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <p style={styles.loading}>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome, {user.name} 👋</h2>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f8",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  button: {
    marginTop: "1rem",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loading: {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "1.2rem",
  },
};

export default Dashboard;
