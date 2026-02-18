const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/restaurants", (req, res) => {
  res.json([
    { id: 1, name: "Kebapçı DevOps" },
    { id: 2, name: "CI/CD Cafe" }
  ]);
});

app.listen(5000, () => console.log("API running on port 5000"));
