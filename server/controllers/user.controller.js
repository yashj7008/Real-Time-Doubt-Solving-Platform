import User from "../model/user.model.js"
import Doubts from "../model/user.doubts.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = async (req, res) =>{
       const userData = req.body;
       userData.password = await bcrypt.hash(userData.password, 10)
       const data = await User.create(userData);
       res.status(200).send({status : true , message : "Successfully register"});
}


export const login = async (req, res) => {
       try {
         const { email, password } = req.body;
         const UserData = await User.findOne({ email: email.toLowerCase()}).select('+password');
     
         if (!UserData) {
           res.status(401).send({ status: false, message: "Invalid Credentials" });
           return;
         }
     
         const isPasswordValid = await bcrypt.compare(password, UserData.password);
     
         if (!isPasswordValid) {
           res.status(401).send({ status: false, message: "Invalid Credentials" });
           return;
         }
     
         // generate JWT Token
         const jwtToken = await UserData.generateJWTToken();
         res.cookie('token', jwtToken, {
           maxAge: 2 * 24 * 60 * 60 * 1000,
         });
     
         res.status(200).send({ status: true, message: "Successfully LoggedIn" });
       } catch (error) {
         console.log(error);
         res.status(500).send({ status: false, message: "Internal Server Error" });
       }
     };


export const postDoubts = async (req, res)=>{
       const userId = req.user.id;
       console.log(req);
   
       const doubtsData = req.body;
       try {
           const data = await Doubts.create({ ...doubtsData, user: userId });
           res.status(200).send(data);
       } catch(e) {
           res.status(500).send(e);
       }
   }


export const getDoubts = async (req, res)=>{
       const userId = req.user.id;
       try {
          const doubtHistory = await Doubts.find({ user: userId })
              .sort({ createdAt: -1 });
           res.status(200).send(doubtHistory);
       } catch(e) {
           res.status(500).send(e);
       }
   }