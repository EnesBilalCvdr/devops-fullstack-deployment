const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.get("/restaurants", (req, res) => {
  res.json([
    { id: 1, name: "Kebapçı" },
    { id: 2, name: "Cafe" },
    { id: 3, name: "Pastane" }
  ]);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});