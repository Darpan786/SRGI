// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");

// const app = express();

// app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/btech", function (req, res) {
//   res.render("btech.ejs");
// });
// app.get("/iii", function (req, res) {
//   res.render("iii");
// });

// app.get("/computerscience", function (req, res) {
//   res.render("cs");
// });
// app.get("/electricals", function (req, res) {
//   res.render("electricals");
// });
// app.get("/electronics", function (req, res) {
//   res.render("electronics");
// });
// app.get("/civil", function (req, res) {
//   res.render("civil");
// });
// app.get("/mechanical", function (req, res) {
//   res.render("mechanical");
// });
// app.get("/pharmacy", function (req, res) {
//   res.render("pharmacy");
// });
// app.get("/Dpharma", function (req, res) {
//   res.render("Dpharma");
// });
// app.get("/Bpharma", function (req, res) {
//   res.render("Bpharma");
// });
// app.get("/campuslife", function (req, res) {
//   res.render("campuslife");
// });
// app.get("/infrastructure", function (req, res) {
//   res.render("infrastructure");
// });
// app.get("/industrialtour", function (req, res) {
//   res.render("industrialtour");
// });

// app.get("/campusfacilities", function (req, res) {
//   res.render("campusfacilities");
// });
// app.get("/academicfacilities", function (req, res) {
//   res.render("academicfacilities");
// });
// app.get("/srconvocation", function (req, res) {
//   res.render("srconvocation");
// });
// app.get("/velocity", function (req, res) {
//   res.render("velocity");
// });
// app.get("/panache", function (req, res) {
//   res.render("panache");
// });
// app.get("/test", function (req, res) {
//   res.render("test");
// });
// app.get("/polytechnic", function (req, res) {
//   res.render("polytechnic");
// });
// app.get("/bba", function (req, res) {
//   res.render("bba");
// });
// app.get("/bca", function (req, res) {
//   res.render("bca");
// });
// app.get("/mca", function (req, res) {
//   res.render("mca");
// });
// app.get("/mba", function (req, res) {
//   res.render("mba");
// });
// app.get("/bscagriculture", function (req, res) {
//   res.render("bscagriculture");
// });
// app.get("/bscbiotech", function (req, res) {
//   res.render("bscbiotech");
// });
// app.get("/bscfoodtechnology", function (req, res) {
//   res.render("bscfoodtechnology");
// });
// app.get("/mtech", function (req, res) {
//   res.render("mtech");
// });
// app.get("/vision&mission", function (req, res) {
//   res.render("vision&mission");
// });
// app.get("/SRGIhistory", function (req, res) {
//   res.render("SRGIhistory");
// });
// app.get("/advisoryboard", function (req, res) {
//   res.render("advisoryboard");
// });
// app.get("/chairman'smessage", function (req, res) {
//   res.render("chairman'smessage");
// });
// app.get("/groupdirectormessage", function (req, res) {
//   res.render("groupdirectormessage");
// });
// app.get("/r&dmessage", function (req, res) {
//   res.render("r&dmessage");
// });
// app.get("/Directorpharmacy", function (req, res) {
//   res.render("Directorpharmacy");
// });
// app.get("/srgioverview", function (req, res) {
//   res.render("srgioverview");
// });
// app.get("/disciplane", function (req, res) {
//   res.render("disciplane");
// });
// app.get("/SEMINAR&WORKSHOPS", function (req, res) {
//   res.render("SEMINAR&WORKSHOPS");
// });
// app.get("/legendarytalks", function (req, res) {
//   res.render("legendarytalks");
// });
// app.get("/indexq", function (req, res) {
//   res.render("indexq");
// });
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { render } = require("ejs");

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
  name: String,
  mobile_no: Number,
  whatsapp: Number,
  course: String,
  through: String,
  dob: String,
  email: String,
};

const Register = mongoose.model("register", registerSchema);

app.post("/re", function (req, res) {
  // console.log(req.body.name);
  // console.log(req.body.mobile_no);
  // console.log(req.body.whatsapp_no);
  // console.log(req.body.come);
  // console.log(req.body.course);

  const newregister = new Register({
    name: req.body.name,
    mobile_no: req.body.mobile_no,
    whatsapp: req.body.whatsapp,
    through: req.body.come,
    course: req.body.course,
    email: req.body.email,
    dob: req.body.birthday,
  });
  newregister.save();
  res.redirect("success");
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
app.get("/r&dmessage", function (req, res) {
  res.render("./Aboutus/rdmessage");
});
app.get("/SRGIhistory", function (req, res) {
  res.render("./Aboutus/SRGIhistory");
});
app.get("/vision&mission", function (req, res) {
  res.render("./Aboutus/vision&mission");
});

// Academics Section
app.get("/academicfacilities", function (req, res) {
  res.render("./Academics/academicfacilities");
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
  res.render("./Schools/collegeofprofessional");
});
app.get("/collegesofem", function (req, res) {
  res.render("./Schools/collegesofem");
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

// Registrations
app.get("/re", function (req, res) {
  res.render("./Registration/re");
});
app.get("/success", function (req, res) {
  res.render("success");
});

// Clubs
app.get("/codingclub", function (req, res) {
  res.render("./clubs/Codingclub");
});
app.get("/literatureclub", function (req, res) {
  res.render("./clubs/literatureclub");
});
app.get("/Musicclub", function (req, res) {
  res.render("./clubs/Musicclub");
});
app.get("/Roboticsclub", function (req, res) {
  res.render("./clubs/Roboticsclub");
});
// Quiz
app.get("/quiz", function (req, res) {
  res.render("quiz");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
