const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { User } = require("./schema/User.js");

dotenv.config();

const app = express();

const getSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

try {
  mongoose.connect(`${process.env.MONGODB_URL}`).then((res) => {
    console.log("DB connected Successfully");
  });
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("SALT", getSalt);

  try {
    const encryptedPassword =
      password && (await bcrypt.hash(password, getSalt));
    const exists = await User.find({
      email,
    });

    console.log("Exists", exists);

    if (exists?.length > 0) {
      return res
        .status(303)
        .send(`User Alreary Exists with email: ${email}. Try other email!`);
    }

    await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    return res.status(200).send("User Registerd Successfully !");
  } catch (error) {
    console.log("Something Went Wrong !", error);
    res.status(400).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.status(401).send("Please provide Email Address!");
    }

    const userDoc = await User.findOne({
      email,
    });

    const { name, _id: id, password: hashedPassword } = await userDoc;

    if (userDoc?.email) {
      if (!password) {
        return res.status(401).send("Please provide Password!");
      }

      const isPasswordSame = await bcrypt.compare(password, hashedPassword);

      if (isPasswordSame) {
        const token = jwt.sign(
          {
            email,
            name,
            id,
          },
          jwtSecret,
          {
            expiresIn: '24h'
          }
        );

        return res.cookie("token", token).send({ name, email, id });
      } else {
        return res.status(401).send("Password doesn't match!.");
      }
    } else {
      res.status(404).send("No User Found! . Please register First");
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(403).send("Log In");

  try {
    const userData = jwt.verify(token, jwtSecret);
    const { name, email, _id: id } = await User.findById(userData.id);
    return res.send({ name, email, id });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

app.post('/logout', async(req, res) => {
    res.cookie("token", "").send()
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));
