import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
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
