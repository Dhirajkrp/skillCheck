const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3500;

const questionRoutes = require("./routes/questionRoutes");
const languageRoutes = require("./routes/languageRoutes");
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
const reportRoutes=require("./routes/reportRoutes");
const path = require("path");

// applying middlewares
app.use(express.json());

//using cors
app.use(cors());

// setting up the static files
app.use(express.static("./public"));

//routes
app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/api/questions", questionRoutes);

app.use("/api/languages", languageRoutes);

app.use("/api/companies", companyRoutes);

app.use("/api/users", userRoutes);
app.use("/api/report",reportRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (err) {
    console.log(`Something went wrong :${err}`);
    process.exit(1);
  }
};

start();
