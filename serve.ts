import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "/srv")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/srv", "index.html"));
});

app.listen(3000, () => console.log("served"));
