import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "/api";

  useEffect(() => {
    console.log(`Fetching from: ${API_URL}/restaurants`);
    
    fetch(`${API_URL}/restaurants`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Connection error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div style={{ 
      padding: "40px", 
      fontFamily: "sans-serif", 
      maxWidth: "600px", 
      margin: "0 auto" 
    }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        Restaurant List
      </h1>

      {loading && <p>⌛ Loading restaurants from {API_URL}...</p>}

      {error && (
        <div style={{ color: "red", padding: "10px", backgroundColor: "#fff0f0", borderRadius: "5px" }}>
          <strong>Error:</strong> {error}
          <p style={{ fontSize: "0.8em" }}>Check if Port 5000 is open in AWS Security Groups.</p>
        </div>
      )}

      {!loading && !error && data.length > 0 ? (
        <div style={{ marginTop: "20px" }}>
          {data.map((r) => (
            <div key={r.id} style={{ 
              padding: "15px", 
              margin: "10px 0", 
              backgroundColor: "#f9f9f9", 
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <strong style={{ fontSize: "1.2em" }}>{r.name}</strong>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p>No restaurants found.</p>
      )}
      
      <footer style={{ marginTop: "40px", fontSize: "0.8em", color: "#888" }}>
        Connected to API at: {API_URL}
      </footer>
    </div>
  );
}

export default App;