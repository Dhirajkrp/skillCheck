const Language = require("../model/Language");

/*
function to get all Languages:
parameters :
    none
status:
    200, if there is Language.
    404 , if there are no Languages.
*/
const getAllLanguages = async (req, res) => {
  try {
    const result = await Language.find({});
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
function to get a Language :
parameters :
    Language id
status:
    200, if there is Language.
    404 , if there is no Language with the id.
*/
const getLanguageById = async (req, res) => {
  const { id: languageID } = req.params;
  if (!languageID) {
    return res.status(400).json({ message: "id required" });
  }
  try {
    const language = await Language.find({ _id: languageID });
    return res.status(200).json(language);
  } catch (err) {
    return res.status(500).json({ message: "Cannot resole the Language ID" });
  }
};

/*
function to get topics of a  Languages  :
parameters :
    language ID
status:
    200, success , response with array of Languages.
    404 , if there is no Language with the tag.
    400, if no tag was specified.
*/
const getTopics = async (req, res) => {
  const { id: languageID } = req.params;
  if (!languageID) {
    return res.status(400).json({ message: "language id required" });
  }
  try {
    const language = await Language.find({ _id: languageID });
    const topics = language[0].topics;
    return res.status(200).json(topics);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/*
function to create a new Language:
parameters :
    Language:string ,
    topics: array of string

status:
    201 , content created.
    401 , bad request , if some values are missing.
*/
const createLanguage = async (req, res) => {
  let { name, topics } = req.body;

  // validating all the input values before adding to the database.
  if (!name) {
    return res.status(400).json({ message: "Name  is required" });
  }

  if (!topics || !Array.isArray(topics)) {
    return res
      .status(400)
      .json({ message: "topics is required and should be an array" });
  }

  //check if there is already a language with the same name.
  const lower = name.toLowerCase();

  const duplicate = await Language.find({ name: lower });

  if (duplicate.length > 0) {
    return res
      .status(409)
      .json({ message: "This name already exist, try updating instead" });
  }

  const data = {
    name,
    topics,
  };

  const newLanguage = new Language(data);
  await newLanguage.save();
  return res.status(201).json(newLanguage);
};

/*
function to delete a Language :
parameters :
    Language id
status:
    204, success , no content to send back.
    404 , if there is no Language with the id.
    500 , for internal server error.
*/
const deleteLanguage = async (req, res) => {
  const { id: languageID } = req.params;

  try {
    const result = await Language.findOneAndDelete({ _id: languageID });
    if (!result) {
      return res
        .status(404)
        .json({ message: `No Language found for the id : ${languageID}` });
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.sendStatus(500);
  }
};

/*
function to update a Language :
parameters :
    Languageid
    name: String
    topics: array of string
status:
    400, if no id , or no fields for update is specified.
    202 , if the Language is updated successfully.
*/
const updateLanguage = async (req, res) => {
  const { id: LanguageID } = req.params;
  const { name, topics } = req.body;

  let currentLanguage = {};
  try {
    currentLanguage = await Language.find({ _id: LanguageID });
  } catch (err) {
    return res
      .status(401)
      .json({ message: `Cannot resole the Language ID : ${LanguageID}` });
  }

  if (!currentLanguage) {
    return res
      .status(404)
      .json({ message: `No Language found for the id ${LanguageID}` });
  }

  if (!name && !topics) {
    return res.status(400).json({ message: "No fields specified for updates" });
  }

  if (topics) {
    if (!Array.isArray(topics) || topics.length < 1) {
      return res
        .status(400)
        .json({ message: "topics should be array with atleast 1 elements." });
    }
  }

  //creating the updating Language
  const updatedLanguage = {
    _id: LanguageID,
    name: name || currentLanguage.name,
    topics: topics || currentLanguage.topics,
  };

  let newLanguage = {};
  try {
    newLanguage = await Language.findOneAndUpdate(
      { _id: LanguageID },
      updatedLanguage,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }

  if (!newLanguage) {
    return res
      .status(404)
      .json({ message: `No Language found for the id ${LanguageID}` });
  }

  return res.status(202).json(newLanguage);
};

module.exports = {
  getAllLanguages,
  getLanguageById,
  createLanguage,
  deleteLanguage,
  updateLanguage,
  getTopics,
};
