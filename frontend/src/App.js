import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use the variable from process.env, or fallback to localhost for development
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
    
    fetch(`${API_URL}/restaurants`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
}, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Restaurant List</h1>
      {data.map(r => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}

export default App;
