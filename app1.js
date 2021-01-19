const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/mytest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const registerSchema = {
  yourname: String,
  mobile_no: Number,
  whatsapp_no: Number,
  course: String,
  through: String,
};

const register = mongoose.model("register", registerSchema);

app.post("/dataentry", function (req, res) {
  console.log(req.body.name);
  console.log(req.body.mobile_no);
  console.log(req.body.whatsapp_no);
  console.log(req.body.come);
  console.log(req.body.course);

  const newregister = new register({
    yourname: req.body.name,
    mobile_no: req.body.mobile_no,
    whatsapp_no: req.body.whatsapp_no,
    through: req.body.come,
    course: req.body.course,
  });
  newregister.save();
});

app.get("/", function (req, res) {
  res.render("home");
});
// Aboutus section
app.get("/advisoryboard", function (req, res) {
  res.render("./Aboutus/advisoryboard");
});
app.get("/chairman'smessage", function (req, res) {
  res.render("./Aboutus/chairman'smessage");
});
app.get("/Directorpharmacy", function (req, res) {
  res.render("./Aboutus/Directorpharmacy");
});
app.get("/groupdirectormessage", function (req, res) {
  res.render("./Aboutus/groupdirectormessage");
});
app.get("r&dmessage", function (req, res) {
  res.render("./Aboutus/r&dmessage");
});
app.get("SRGIhistory", function (req, res) {
  res.render("./Aboutus/SRGIhistory");
});
app.get("vision&mission", function (req, res) {
  res.render("./Aboutus/vision&mission");
});

// Academics Section
app.get("/academicsfacilities", function (req, res) {
  res.render("./Academics/academicsfacilities");
});
app.get("/conference", function (req, res) {
  res.render("./Academics/conference");
});
app.get("/disciplane", function (req, res) {
  res.render("./Academics/disciplane");
});
app.get("/legendarytalks", function (req, res) {
  res.render("./Academics/legendarytalks");
});
app.get("/SEMINAR&WORKSHOPS", function (req, res) {
  res.render("./Academics/SEMINAR&WORKSHOPS");
});
app.get("/srgioverview", function (req, res) {
  res.render("./Academics/srgioverview");
});

// courses section
app.get("/bba", function (req, res) {
  res.render("./courses/bba");
});
app.get("/bca", function (req, res) {
  res.render("./courses/bca");
});
app.get("/Bpharma", function (req, res) {
  res.render("./courses/Bpharma");
});
app.get("/bscagriculture", function (req, res) {
  res.render("./courses/bscagriculture");
});
app.get("/bscbiotech", function (req, res) {
  res.render("./courses/bscbiotech");
});
app.get("/bscfoodtechnology", function (req, res) {
  res.render("./courses/bscfoodtechnology");
});
app.get("/btech", function (req, res) {
  res.render("./courses/btech");
});
app.get("/civil", function (req, res) {
  res.render("./courses/civil");
});
app.get("/cs", function (req, res) {
  res.render("./courses/cs");
});
app.get("/Dpharma", function (req, res) {
  res.render("./courses/Dpharma");
});
app.get("/electricals", function (req, res) {
  res.render("./courses/electricals");
});
app.get("/electronics", function (req, res) {
  res.render("./courses/electronics");
});
app.get("/law", function (req, res) {
  res.render("./courses/law");
});
app.get("/mba", function (req, res) {
  res.render("./course/mba");
});
app.get("/mca", function (req, res) {
  res.render("./courses/mca");
});
app.get("/mechanical", function (req, res) {
  res.render("./courses/mechanical");
});
app.get("/mtech", function (req, res) {
  res.render("./courses/mtech");
});
app.get("/polytechnic", function (req, res) {
  res.render("./courses/polytechnic");
});
// app.get("/re", function (req, res) {
//   res.render("re");
// });

// Life at srgi

app.get("/campusfacilities", function (req, res) {
  res.render("./Lifeatsrgi/campusfacilities");
});
app.get("/campuslife", function (req, res) {
  res.render("./Lifeatsrgi/campuslife");
});
app.get("/industrialtour", function (req, res) {
  res.render("./Lifeatsrgi/industrialtour");
});
app.get("/infrastructure", function (req, res) {
  res.render("./Lifeatsrgi/infrastructure");
});
app.get("/panache", function (req, res) {
  res.render("./Lifeatsrgi/panache");
});
app.get("/srconvocation", function (req, res) {
  res.render("./Lifeatsrgi/srconvocation");
});
app.get("/velocity", function (req, res) {
  res.render("./Lifeatsrgi/velocity");
});

// Schools Section

app.get("/CollegeOfPharma", function (req, res) {
  res.render("./Schools/CollegeOfPharma");
});
app.get("/collegeofprofessional", function (req, res) {
  res.render("./Schools/collegeofprofessiona");
});
app.get("/collgesofEngMAn", function (req, res) {
  res.render("./Schools/collgesofEngMAn");
});
app.get("/SRCOLLEGEOFLAW", function (req, res) {
  res.render("./Schools/SRCOLLEGEOFLAW");
});
app.get("/SRcollegeOFpharmacy", function (req, res) {
  res.render("./Schools/SRcollegeOFpharmacy");
});
app.get("/SRCOLLEGEOFPOLY", function (req, res) {
  res.render("./Schools/SRCOLLEGEOFPOLY");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
