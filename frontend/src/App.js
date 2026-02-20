import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || "http://3.66.157.222:5000";

useEffect(() => {
  fetch(`${API_URL}/restaurants`) 
    .then(res => res.json())
    .then(setData)
    .catch(err => console.error("Connection error:", err));
}, [API_URL]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Restaurant List</h1>
      {data.length > 0 ? (
        data.map((r) => <p key={r.id}>{r.name}</p>)
      ) : (
        <p>Loading restaurants...</p>
      )}
    </div>
  );
}

export default App;