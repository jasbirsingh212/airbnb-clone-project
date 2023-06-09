const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
const port = process.env.PORT || 4000;

app.get("/register", (req, res) => res.send("Hello World! " + req.name));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
