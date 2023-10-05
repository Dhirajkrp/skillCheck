const Company = require("../model/Company");

/*Schema: 
    name: String
    description: String
    profile: [String]
    compImage: String
    websiteLink: String
*/

/*
function to get all Company:
parameters :
    none
status:
    200, if there is Company.
    404 , if there are no Company.
*/
const getAllCompanies = async (req, res) => {
  try {
    const result = await Company.find({});
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
function to get a Company :
parameters :
    Company id
status:
    200, if there is Company.
    404 , if there is no Company with the id.
*/
const getCompanyById = async (req, res) => {
  const { id: companyID } = req.params;
  if (!companyID) {
    return res.status(400).json({ message: "id required" });
  }
  try {
    const company = await Company.find({ _id: companyID });
    return res.status(200).json(company);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/*
function to get topics of a  Company  :
parameters :
    Company ID
status:
    200, success , response with array of Company.
    404 , if there is no Company with the tag.
    400, if no tag was specified.
*/
const getProfiles = async (req, res) => {
  const { id: companyID } = req.params;
  if (!companyID) {
    return res.status(400).json({ message: "Company id required" });
  }
  try {
    const company = await Company.find({ _id: companyID });
    const profiles = company[0].profile;
    return res.status(200).json(profiles);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/*
function to create a new Company:
parameters :
    Company:string ,
    topics: array of string

status:
    201 , content created.
    400 , bad request , if some values are missing.
*/
const createCompany = async (req, res) => {
  let { name, description, profile, compImage, websiteLink } = req.body;

  // validating all the input values before adding to the database.
  if (!name) {
    return res.status(400).json({ message: "Name  is required" });
  }

  if (!profile || !Array.isArray(profile)) {
    return res
      .status(400)
      .json({ message: "profile is required and should be an array" });
  }

  if (!description) {
    return res.status(400).json({ message: "description  is required" });
  }

  if (!compImage) {
    return res.status(400).json({ message: "Company image  is required" });
  }

  if (!websiteLink) {
    return res.status(400).json({ message: "website link  is required" });
  }

  //check if there is already a Company with the same name.
  const lower = name.toLowerCase();
  const duplicate = await Company.find({ name: lower });

  if (duplicate.length > 0) {
    return res
      .status(409)
      .json({ message: "This name already exist, try updating instead" });
  }

  const data = {
    name,
    description,
    profile,
    compImage,
    websiteLink,
  };

  const newCompany = new Company(data);
  await newCompany.save();
  return res.status(201).json(newCompany);
};

/*
function to delete a Company :
parameters :
    Company id
status:
    204, success , no content to send back.
    404 , if there is no Company with the id.
    500 , for internal server error.
*/
const deleteCompany = async (req, res) => {
  const { id: companyID } = req.params;

  try {
    const result = await Company.findOneAndDelete({ _id: companyID });
    if (!result) {
      return res
        .status(404)
        .json({ message: `No Company found for the id : ${companyID}` });
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.sendStatus(500);
  }
};

/*
function to update a Company :
parameters :
    Companyid
    name: String
    topics: array of string
status:
    400, if no id , or no fields for update is specified.
    202 , if the Company is updated successfully.
*/
const updateCompany = async (req, res) => {
  const { id: companyID } = req.params;
  const { name, description, profile, compImage, websiteLink } = req.body;

  //validating the company id.
  let currentCompany = {};
  try {
    currentCompany = await Company.find({ _id: companyID });
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Cannot resole the Company ID : ${companyID}` });
  }

  if (!currentCompany) {
    return res
      .status(404)
      .json({ message: `No Company found for the id ${companyID}` });
  }

  //validating the fileds for update.
  if (!name && !description && !profile && !compImage && !websiteLink) {
    return res.status(400).json({ message: "No fileds specified for update" });
  }

  if (profile) {
    if (!Array.isArray(profile) || profile.length < 1) {
      return res
        .status(400)
        .json({ message: "profile should be an array with atleast 1 value." });
    }
  }

  //creating the updating Company
  const updatedCompany = {
    _id: companyID,
    name: name || currentCompany.name,
    description: description || currentCompany.description,
    profile: profile || currentCompany.profile,
    compImage: compImage || currentCompany.compImage,
    websiteLink: websiteLink || currentCompany.websiteLink,
  };

  let newCompany = {};
  try {
    newCompany = await Company.findOneAndUpdate(
      { _id: companyID },
      updatedCompany,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(202).json(newCompany);
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  updateCompany,
  getProfiles,
};
