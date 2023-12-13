const Report = require("../model/Report");

/*Schema: 
    name: String
    date: date
    score: number
    userId : String
*/

/*
function to get all Reports:
parameters :
    none
status:
    200, if there are Reports.
    404 , if there are no Reports.
*/

const getAllReports = async (req, res) => {
  try {
    const result = await Report.find({});
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
function to get a Reports :
parameters :
    Reports id
status:
    200, if there is Reports.
    404 , if there is no Reports with the id.
*/
const getReportsById = async (req, res) => {
  const { id: ReportsID } = req.params;
  if (!ReportsID) {
    return res.status(400).json({ message: "id required" });
  }
  try {
    const Reports = await Report.find({ _id: ReportsID });
    return res.status(200).json(Reports);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/*
function to get topics of a  Reports  :
parameters :
    Reports ID
status:
    200, success , response with array of Reports.
    404 , if there is no Reports with the tag.
    400, if no tag was specified.
*/

/*
function to create a new Reports:
parameters :
    Reports:string ,
    topics: array of string

status:
    201 , content created.
    400 , bad request , if some values are missing.
*/
const createReports = async (req, res) => {
  let { name, date, score, userId, topics, totalQuestions } = req.body;
  // validating all the input values before adding to the database.
  if (!name) {
    return res.status(400).json({ message: "Name  is required" });
  }

  if (!date) {
    return res.status(400).json({ message: "date is required" });
  }

  if (!score && score !== 0) {
    return res.status(400).json({ message: "score  is required" });
  }

  if (!userId) {
    return res.status(400).json({ message: "userId  is required" });
  }

  const data = {
    name,
    date,
    score,
    userId,
    topics,
    totalQuestions,
  };

  const newReports = new Report(data);
  await newReports.save();
  return res.status(201).json(newReports);
};

// function to get the reports of a user
const getReportsOfUser = async (req, res) => {
  const { userId } = req.params;

  const reports = await Report.find({ userId });

  if (!reports.length) {
    return res.status(404).json(reports);
  }
  return res.status(200).json(reports);
};

/*
function to delete a Reports :
parameters :
    Reports id
status:
    204, success , no content to send back.
    404 , if there is no Reports with the id.
    500 , for internal server error.
*/
const deleteReports = async (req, res) => {
  const { id: ReportsID } = req.params;

  try {
    const result = await Report.findOneAndDelete({ _id: ReportsID });
    if (!result) {
      return res
        .status(404)
        .json({ message: `No Reports found for the id : ${ReportsID}` });
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.sendStatus(500);
  }
};

/*
function to update a Reports :
parameters :
    Reportsid
    name: String
    topics: array of string
status:
    400, if no id , or no fields for update is specified.
    202 , if the Reports is updated successfully.
*/
const updateReports = async (req, res) => {
  const { id: ReportsID } = req.params;
  const { name, date, score } = req.body;

  //validating the Reports id.
  let currentReports = {};
  try {
    currentReports = await Report.find({ _id: ReportsID });
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Cannot resole the Reports ID : ${ReportsID}` });
  }

  if (!currentReports) {
    return res
      .status(404)
      .json({ message: `No Reports found for the id ${ReportsID}` });
  }

  //validating the fileds for update.
  if (!name && !date && !score) {
    return res.status(400).json({ message: "No fileds specified for update" });
  }

  //creating the updating Reports
  const updatedReports = {
    _id: ReportsID,
    name: name || currentReports.name,
    date: date || currentReports.date,
    score: score || currentReports.score,
  };

  let newReports = {};
  try {
    newReports = await Report.findOneAndUpdate(
      { _id: ReportsID },
      updatedReports,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(202).json(newReports);
};

module.exports = {
  getAllReports,
  getReportsById,
  createReports,
  deleteReports,
  updateReports,
  getReportsOfUser,
};
