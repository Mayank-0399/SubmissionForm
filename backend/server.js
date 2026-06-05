const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);
app.get("/api", (req, res) => {
  res.send("API Running");
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route for SPA - serve index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});