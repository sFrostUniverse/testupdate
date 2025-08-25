// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example data (your latest APK info)
const latestUpdate = {
  version: "1.0.8",
  url: "https://raw.githubusercontent.com/sFrostUniverse/FrostUpdate/main/releases/app-release.apk"
};

// API endpoint for update check
app.get("/latest", (req, res) => {
  console.log(`[PING] /latest requested from ${req.ip} at ${new Date().toISOString()}`);
  res.json(latestUpdate);
});

// Health check
app.get("/", (req, res) => {
  res.send("✅ TestUpdate API is running!");
});

// Render uses PORT env variable
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
