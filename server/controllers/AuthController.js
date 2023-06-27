import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validateRegisterInput from "../validation/register.js";
import validateLoginInput from "../validation/login.js";
import { OAuth2Client } from "google-auth-library";


// Register new user
export const registerUser = async (req, res) => {
  
  //Validate input
/*   const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } */

  try {
    //Check if username exists
    const existsUserName = await UserModel.findOne({ username: req.body.username });
    if (existsUserName){
      return res.status(400).json({ message: "UserName already registered" });
    }

    const existsEmail = await UserModel.findOne({email: req.body.email})
    if (existsEmail){
      return res.status(400).json({ message: "Email already registered" });
    }

    //Salting password before saving in db
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
      });
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const loginGoogle = async (req, res) =>{
  const client = new OAuth2Client(process.env.CLIENT_ID);
  try{
    const tokenGoogle = req.body.credential;
    const clientId = req.body.clientId
    console.log(tokenGoogle);
    const ticket = await client.verifyIdToken({
      idToken: tokenGoogle,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    const user = await UserModel.findOne({ email: email });
    if (!user){
      const newUser = new UserModel({
        email: email,
        });
      const user = await newUser.save();
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
}