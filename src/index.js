const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("dist/"));

app.get("/resume", (req, res) => {
  const filePath = path.join(
    __dirname,
    "assets",
    "resume",
    "shayan_iranipour_cv.pdf",
  );
  res.sendFile(filePath);
});

//Any route not handled by the browser is handled by the react app
//we need this if the user requests an unidentified route directly from
//the address bar for example.
app.get("*", function (req, res) {
  res.sendFile("index.html", { root: "dist/" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
