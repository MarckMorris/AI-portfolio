// src/components/ServiceCard.jsx
import React from "react";

export default function ServiceCard({ title, description, url }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.desc}>{description}</p>
      <a href={url} style={styles.button} target="_blank">
        Open Service
      </a>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    width: "280px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  title: { margin: 0, color: "#004c91" },
  desc: { margin: "10px 0" },
  button: {
    padding: "8px 16px",
    backgroundColor: "#004c91",
    color: "white",
    borderRadius: "4px",
    textDecoration: "none"
  }
};
