const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

try {
  mongoose.connect(`${process.env.MONGODB_URL}`).then((res) =>{
    console.log("DB connected Successfully")
  } );
  
} catch (error) {
  console.log(error)
}

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post("/register", (req, res) => {
  console.log(req)
  const { name, email, password } = req.body;

  res.send(`Hello ${name} ${email}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));
