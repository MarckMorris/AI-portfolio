import React from "react";
import Header from "./components/Header.jsx";
import ServiceCard from "./components/ServiceCard.jsx";

function App() {
  return (
    <div>
      <Header />

      <div style={styles.container}>
        <ServiceCard
          title="Retail Inquiry API"
          description="NLP-powered search service."
          url="http://localhost:5000/docs"
        />
        <ServiceCard
          title="Retail Assortment API"
          description="Product recommendation engine."
          url="http://localhost:5001/docs"
        />
        <ServiceCard
          title="Retail Catalog API"
          description="Product metadata service."
          url="http://localhost:5002/docs"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default App;
