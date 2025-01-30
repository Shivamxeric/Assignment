import bycrypt from 'bcryptjs';
import User from '../model/user.model.js';
import generateTokenAndSetCookie from '../db/generateToke.js';
import { sendEmail } from './mailer.js'; // Import sendEmail function

export const signup = async (req, res) => {
  try {
    const { fullName, email, mobile, password, amount } = req.body;

    // Check if all fields are provided
    if (!(fullName && email && mobile && password && amount)) {
      return res.status(400).json('All fields are mandatory');
    }

    // Check if email already exists
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return res.status(400).json('Email already exists, try a different email');
    }

    // Encrypt the password
    const salt = await bycrypt.genSalt(10);
    const hashPassword = await bycrypt.hash(password, salt);

    // Save the user to the database
    const newUser = new User({
      fullName,
      email,
      mobile,
      password: hashPassword,
      amount,
    });

    await newUser.save();

    // Set cookies & token
    generateTokenAndSetCookie(newUser._id, res);

    // Send a welcome email
    const emailSubject = 'Welcome to Sukuyomi!';
    const emailBody = `Hello ${fullName},\n\nThank you for signing up for Sukuyomi. We are excited to have you on board!`;

    await sendEmail(email, emailSubject, emailBody); // Send the email

    // Send response
    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      mobile: newUser.mobile,
      amount: newUser.amount,
    });
  } catch (error) {
    console.error('Error in signup controller:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if all fields are provided
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory." });
      }
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
      }
  
      // Compare passwords
      const isPasswordValid = await bycrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password." });
      }
  
      // Generate token and set cookie
      generateTokenAndSetCookie(user._id, res);
  
      // Send success response
      return res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
      });
    } catch (error) {
      console.error("Error in login controller:", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

export const logout = async (req, res) => {
try {
      //  clear all cookies
      res.cookie("jwt", "",{ maxAge: 0 });
      // send response
      return res.status(200).json("logged Out Succesfully")
} catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });

}
};


export const getAllData = async (req, res) => {

  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}