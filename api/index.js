const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
const port = process.env.PORT || 4000;

app.post("/register", (req, res) => {
  console.log(req)
  const { name, email, password } = req.body;

  res.send(`Hello ${name} ${email}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));
