const e = require("express");
const express = require("express");
const math = require("mathjs");
const app = express();
const port = 3000;

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
var serviceAccount = require("./key.json");
const { atan2 } = require("mathjs");
initializeApp({
  credential: cert(serviceAccount),
});
const db = getFirestore();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

//app.get("/index", (req, res) => {
//res.render("index");
//});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/aboutnav", (req, res) => {
  res.render("about");
});
app.get("/aboutWebsite", (req, res) => {
  res.render("products");
});

app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/homenav", (req, res) => {
  res.render("home");
});
//app.get("/homesubmit", (req, res) => {
//res.render("signup");
//});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signupnav", (req, res) => {
  res.render("signup");
});
app.get("/signupsubmit", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const phone = req.query.phone;
  const password = req.query.password;
  db.collection("Users")
    .add({
      Name: name,
      Email: email,
      PhoneNumber: phone,
      Password: password,
    })
    .then(() => {
      res.render("login");
    });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/loginnav", (req, res) => {
  res.render("login");
});
app.get("/loginsubmit", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  db.collection("Users")
    .where("Email", "==", email)
    .where("Password", "==", password)
    .get()
    .then((docs) => {
      if (docs.size > 0) {
        res.render("vote");
      } else {
        res.render("signup");
      }
    });
});

app.get("/products", (req, res) => {
  res.render("products");
});
app.get("/productsnav", (req, res) => {
  res.render("products");
});

app.get("/cartnav", (req, res) => {
  res.render("cart");
});
//app.get("/cartsubmit", (req, res) => {
//res.render("contact");
//});

app.get("/contactnav", (req, res) => {
  res.render("contact");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/contactsubmit", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const phone = req.query.phone;
  const review = req.query.review;
  db.collection("Feedback")
    .add({
      Name: name,
      Email: email,
      PhoneNumber: phone,
      Feedback: review,
    })
    .then(() => {
      res.render("thankyou");
    });
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou");
});

app.get("/thankyousubmit", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Server is running on Port Number: http://localhost:${port}`);
});

app.get("/contactsubmit", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const phone = req.query.phone;
  const review = req.query.review;
  db.collection("Feedback")
    .add({
      Name: name,
      Email: email,
      PhoneNumber: phone,
      Feedback: review,
    })
    .then(() => {
      res.render("thankyou");
    });
});

app.get("/votesubmit", (req, res) => {
  const aq1 = req.query.aq1;
  const aq2 = req.query.aq2;
  const aq3 = req.query.aq3;
  const aq4 = req.query.aq4;
  const aq5 = req.query.aq5;
  const bq1 = req.query.bq1;
  const bq2 = req.query.bq2;
  const bq3 = req.query.bq3;
  const bq4 = req.query.bq4;
  const bq5 = req.query.bq5;
  const cq1 = req.query.cq1;
  const cq2 = req.query.cq2;
  const cq3 = req.query.cq3;
  const cq4 = req.query.cq4;
  const cq5 = req.query.cq5;
  const dq1 = req.query.dq1;
  const dq2 = req.query.dq2;
  const dq3 = req.query.dq3;
  const dq4 = req.query.dq4;
  const dq5 = req.query.dq5;
  const eq1 = req.query.eq1;
  const eq2 = req.query.eq2;
  const eq3 = req.query.eq3;
  const eq4 = req.query.eq4;
  const eq5 = req.query.eq5;
  const fq1 = req.query.fq1;
  const fq2 = req.query.fq2;
  const fq3 = req.query.fq3;
  const fq4 = req.query.fq4;
  const fq5 = req.query.fq5;
  const gq1 = req.query.gq1;
  const gq2 = req.query.gq2;
  const gq3 = req.query.gq3;
  const gq4 = req.query.gq4;
  const gq5 = req.query.gq5;
  const hq1 = req.query.hq1;
  const hq2 = req.query.hq2;
  const hq3 = req.query.hq3;
  const hq4 = req.query.hq4;
  const hq5 = req.query.hq5;
  const iq1 = req.query.iq1;
  const iq2 = req.query.iq2;
  const iq3 = req.query.iq3;
  const iq4 = req.query.iq4;
  const iq5 = req.query.iq5;
  const jq1 = req.query.jq1;
  const jq2 = req.query.jq2;
  const jq3 = req.query.jq3;
  const jq4 = req.query.jq4;
  const jq5 = req.query.jq5;
  db.collection("voters")
    .add({
      Candidate1_Trait1: aq1,
      Candidate2_Trait1: aq2,
      Candidate3_Trait1: aq3,
      Candidate4_Trait1: aq4,
      Candidate5_Trait1: aq5,
      Candidate1_Trait2: bq1,
      Candidate2_Trait2: bq2,
      Candidate3_Trait2: bq3,
      Candidate4_Trait2: bq4,
      Candidate5_Trait2: bq5,
      Candidate1_Trait3: cq1,
      Candidate2_Trait3: cq2,
      Candidate3_Trait3: cq3,
      Candidate4_Trait3: cq4,
      Candidate5_Trait3: cq5,
      Candidate1_Trait4: dq1,
      Candidate2_Trait4: dq2,
      Candidate3_Trait4: dq3,
      Candidate4_Trait4: dq4,
      Candidate5_Trait4: dq5,
      Candidate1_Trait5: eq1,
      Candidate2_Trait5: eq2,
      Candidate3_Trait5: eq3,
      Candidate4_Trait5: eq4,
      Candidate5_Trait5: eq5,
      Candidate1_Trait6: fq1,
      Candidate2_Trait6: fq2,
      Candidate3_Trait6: fq3,
      Candidate4_Trait6: fq4,
      Candidate5_Trait6: fq5,
      Candidate1_Trait7: gq1,
      Candidate2_Trait7: gq2,
      Candidate3_Trait7: gq3,
      Candidate4_Trait7: gq4,
      Candidate5_Trait7: gq5,
      Candidate1_Trait8: hq1,
      Candidate2_Trait8: hq2,
      Candidate3_Trait8: hq3,
      Candidate4_Trait8: hq4,
      Candidate5_Trait8: hq5,
      Candidate1_Trait9: iq1,
      Candidate2_Trait9: iq2,
      Candidate3_Trait9: iq3,
      Candidate4_Trait9: iq4,
      Candidate5_Trait9: iq5,
      Candidate1_Trait10: jq1,
      Candidate2_Trait10: jq2,
      Candidate3_Trait10: jq3,
      Candidate4_Trait10: jq4,
      Candidate5_Trait10: jq5,
    })
    .then(() => {
      res.render("contact");
    });
});
