const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

const questionRoutes = require("./routes/questionRoutes");

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

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
