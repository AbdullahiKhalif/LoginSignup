import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';
import sendEmailToForgetPassword from '../email/sendEmailToForgetPassword.js';

export const registerUser = async(req, res) =>{

    try {
      const { username, email, password } = req.body;
        const userExits = await userModel.findOne({
            $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }],
        });

        if (userExits) {
            if (userExits.username == username.toLowerCase()) {
                return res.status(400).send("This Username already teked!");
            } else if (userExits.email == email.toLowerCase()) {
                return res.status(400).send("This Email already teked!");
            }
        }
        const user = new userModel({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password,
          });
          await user.save();
          return res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
export const loginUser = async(req, res) => {
    const {username, password} = req.body;
    try{
      const userExit= await userModel.findOne({username: username.toLowerCase(), password});
      if(!userExit) return res.status(403).send("Username or password are incorrect!");
  
      const token = jwt.sign({_id: userExit._id},jwtSecret);
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 1 * 24* 60 * 60 * 1000, // 1 day
        secure: false,
      })
  
      userExit.password = undefined;
      res.status(200).send(userExit);
  
    } catch(err){
      res.status(400).send("UnKnow Error At Login");
      console.log(`UnKnow Error At Login, ${err}`)
    }
  }
  
  export const forgetPassword = async(req, res) => {
    const {email} = req.body;
    try{
      const userExit= await userModel.findOne({email: email.toLowerCase()});
      if(!userExit) return res.status(403).send("Invalid email address provided! Please enter a valid email address");
  
     sendEmailToForgetPassword(email, userExit.password);
      res.status(200).send("Success✅ Check Your Email");
  
    } catch(err){
      res.status(400).send(err.message);
      console.log(`UnKnow Error At ForgetPassword, ${err}`)
    }
  }
  




