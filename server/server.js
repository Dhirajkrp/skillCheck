const express = require("express");
const app = express();

require("dotenv").config();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3500;

const questionRoutes = require("./routes/questionRoutes");
const languageRoutes = require("./routes/languageRoutes");

const path = require("path");

// applying middlewares
app.use(express.json());

// setting up the static files
app.use(express.static("./public"));

//routes
app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/api/questions", questionRoutes);

app.use("/api/languages", languageRoutes);

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
