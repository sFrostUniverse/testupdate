// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example data (this should be your latest APK info)
const latestUpdate = {
  version: "1.0.8", // the latest version you want to serve
  url: "https://example.com/frostupdate.apk" // direct link to your APK
};

// API endpoint for update check
app.get("/latest", (req, res) => {
  res.json(latestUpdate);
});

// Health check (optional)
app.get("/", (req, res) => {
  res.send("✅ TestUpdate API is running!");
});

// Render uses PORT env variable
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
