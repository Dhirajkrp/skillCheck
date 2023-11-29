const app = require("express")();
const mongoose = require("mongoose");
const http = require("http").Server(app);

const User = require("./model/User");
const Ques = require("./model/Question");
const Lang = require("./model/Language");
const Comp = require("./model/Company");

require("dotenv").config();
async function insert() {
  await Comp.create({
    name: "TotheNew",
    description:
      "A digital technology services company that provides product engineering,cloud and FinOps services to enterprises, SaaS,Isv and consumer tech company.",
    profile: ["Software Developer", "Quality Analyst"],
    compImage: "https://i.ytimg.com/vi/7OjMLUhajO8/maxresdefault.jpg",
    websiteLink: "https://www.tothenew.com/",
  });
}

insert();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// const User=require('./model/User');

http.listen(4000, function () {
  console.log("Server is running on Port 4000 ");
});
