// let servestatic = require("serve-static");
let path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname + "/dist/")));

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, () => {
  console.log(`🚀 Starting prod server on port ${PORT}`);
});
