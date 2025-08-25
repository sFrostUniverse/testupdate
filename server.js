require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/latest', (req, res) => {
  res.json({
    version: "1.0.8",
    url: "https://github.com/sFrostUniverse/FrostUpdate/raw/main/releases/app-release.apk"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
