import express from "express";

const app = express();
app.use(express.static("/srv"));
app.get("/*", (req, res) => {
  res.sendFile("/srv/index.html");
});

app.listen(3000, () => console.log("serving ..."));
