const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://devops_user:devops_pass@db:5432/restaurant_db",
});

const PORT = process.env.PORT || 5000;

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected", timestamp: new Date() });
  } catch (err) {
    res.status(500).json({ status: "error", database: "disconnected" });
  }
});

app.get("/restaurants", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM restaurants ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Database query error:", err.stack);
    res.status(500).json({ error: "Failed to fetch data from database" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend API with Database is running 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});