const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("dist/"));

app.get("/resume", (req, res) => {
  const filePath = path.join(
    __dirname,
    "assets",
    "resume",
    "shayan_iranipour_cv.pdf"
  );
  res.sendFile(filePath);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
