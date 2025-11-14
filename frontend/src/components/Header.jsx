// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Walmart AI Portfolio</h1>
      <p style={styles.subtitle}>AI-Powered Retail Microservices</p>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#004c91",
    color: "white",
    textAlign: "center"
  },
  title: {
    margin: 0,
    fontSize: "2rem"
  },
  subtitle: {
    margin: 0,
    fontSize: "1rem",
    opacity: 0.8
  }
};
