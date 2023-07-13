import express from "express";
import { config } from "dotenv";

const app = express();
app.use(express.static("/srv"));
app.get("/*", (req, res) => {
  res.sendFile("/srv/index.html");
});

config();
const _port = process.env.PORT;
if (_port)
  app.listen(process.env.PORT, () => console.log("serving ..."))
else throw Error('PORT not defined!');
