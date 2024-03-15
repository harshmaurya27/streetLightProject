const express = require("express");
const app = express();
require("./db/conn");
const Response = require("./models/registers");
const path = require("path");
const hbs = require("hbs");
const { log } = require("console");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path)); // by default public me index ko dekhega but nahi milega
// console.log(path.join(__dirname, "../public"));

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/views/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  // res.send("hello harsh maurya again"); //because we are using handle bars
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});

//create new user databse
app.post("/register", async (req, res) => {
  try {
    const complaintResponse = new Response({
      personname: req.body.personname,
      email: req.body.email,
      Date: req.body.Date,
      lightId: req.body.lightId,
      areaPin: req.body.areaPin,
      complaint: req.body.complaint,
    });

    const complaints = await complaintResponse.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`my server is running at port number ${port}`);
});
