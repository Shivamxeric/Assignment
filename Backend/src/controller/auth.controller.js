import bcrypt from 'bcryptjs'; // Fixed import spelling
import User from '../model/user.model.js';
import generateTokenAndSetCookie from '../db/generateToke.js';
import { sendEmail } from './mailer.js'; // Import sendEmail function
import { sendSMS } from './sms.js';


export const signup = async (req, res) => {
  try {
    const { fullName, email, password, number } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "All fields are mandatory" });
    }

 

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const profilePic = "https://cdn-icons-png.flaticon.com/512/9187/9187604.png";

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
      profilePic,
      number,
    });

    await newUser.save();

    generateTokenAndSetCookie(newUser._id, res);

    const emailSubject = "Welcome to Sukuyomi! 👻";
    const emailBody = `Hello ${fullName},\n\nThank you for signing up for Sukuyomi. We are excited to have you on board! 🎉`;

    await sendEmail(email, emailSubject, emailBody);

    if (number) {
      sendSMS(number, `Hello ${fullName},\n\nThank you for signing up for Sukuyomi. We are excited to have you on board! 🎉`);
    }

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
      number: newUser.number,
    });
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are mandatory." });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Generate token and set cookie
    generateTokenAndSetCookie(user._id, res);

    // Send success response
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      profilePic: user.profilePic, // Include profile pic in response
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    // Clear the authentication cookie
    res.clearCookie("jwt", "", {maxAge: 0});

    // Send response
    return res.status(200).json({ message: "Logged out successfully" });
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
};

export const profileUpdate = async (req,res) => {
  // update name and profilePic 
  // check change filled fill
  // update all things
  
}
