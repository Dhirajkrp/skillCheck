const User = require("../model/User");

const bcrypt = require("bcrypt");

/*  function to login:

@params:
    email: string
    password: string

status:
200: user found , returns the data of the current user,
400: for bad request , if email or password is missing,
401: unauthorized: if the email and paswword does not match

*/

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    //validating if the email and the password exist.
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    // finding user for the given email.
    const user = await User.findOne({ emailID: email });

    if (!user) {
      return res.status(401).json({ message: "no user found for this email" });
    }

    //comparing the password
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(401).json({ message: "incorrect Password" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

/* function to sign up for a new student

@param:
    name: string,
    rollNo: string,
    email: string,
    password: string,

status:

    400: bad request , if any of the param is missing,
    409: if there is already a user with the email or the rollNo.\
    500: internal server error.
*/

const signup = async (req, res) => {
  try {
    const { name, rollNo, email, password } = req.body;

    //validating the user data.
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    if (!rollNo) {
      return res.status(400).json({ message: "rollNo is required" });
    }

    //   checking for any duplicate email
    const duplicateEmail = await User.findOne({ emailID: email });
    if (duplicateEmail) {
      return res
        .status(401)
        .json({ message: "This email has been already used" });
    }

    //   checking for any duplicate rollNo
    const duplicateRollNO = await User.findOne({ rollNo: rollNo });
    if (duplicateRollNO) {
      return res
        .status(401)
        .json({ message: "This rollNo has already been used " });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      emailID: email,
      password: encryptedPassword,
      rollNo,
    });

    if (newUser) {
      return res.status(201).json(newUser);
    }
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

const getUserByID = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  const user = await User.find({ _id: id });

  if (!user) {
    res.status(400).json({ message: "no user found for the id" });
  }
  return res.status(200).json(user);
};
module.exports = {
  login,
  signup,
  getUserByID,
};
