import getDataUri from "../utils/datauri.js";
import { Profile } from "../model/Profile.model.js";
import { User } from "../model/User.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cloudinary from "../utils/cloudinary.js";
// controller for registering user 
export const register = async (req, res) => {
    try {
        // destructuring from req body
        const { fullName, email, phoneNumber, password, role } = req.body;
        // check all field 
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            })
        }
        // check if email already exist
        const Existinguser = await User.findOne({ email })
        if (Existinguser) {
            return res.status(400).json({
                success: false,
                message: 'Email Already Exist'
            })
        }

        const file = req.file;
        const fileUrl = getDataUri(file)
        const profilePhoto = cloudinary.uploader.upload(fileUrl.content)

        // hashpassowrd 
        const hashedPassword = await bcrypt.hash(password, 10)
        // create profile 
        const profileDetails = await Profile.create({
            bio: null,
            skills: null,
            resume: null,
            resumeOriginalName: null,
            profilePhoto: profilePhoto

        })
        // create new user
        const user = await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: profileDetails._id
        })

        // return res 
        return res.status(200).json({
            success: true,
            message: 'User Registered Successfully',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Login Controllers functionality

export const login = async (req, res) => {
    try {
        // destructure from req.body
        const { email, password } = req.body;
        // check all field
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields',
            })
        }
        // find user by email
        const user = await User.findOne({ email }).populate('profile');
        // check if user exist
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            })
        }
        // check if password is correct
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            })
        }
        // generate token using JWT
        // eslint-disable-next-line no-undef
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" })
        // cookies
        const options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: 'User Login Successfully'

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// logout functionality

export const logout = async (req, res) => {
    try {
        // remove cookie
        console.log('logout func')
        return res.status(200).cookie("token", "", { expires: new Date(0), httpOnly: true }).json({
            success: true,
            message: 'User Logout Successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// update profile

export const updateProfile = async (req, res) => {
    try {
        // destructure from req.body
        const { fullName, phoneNumber, bio, skills } = req.body;
        if (!fullName || !phoneNumber || !bio || !skills) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all fields'
            })
        }

        // get user id from req.id
        const userId = req.user.id;
        // console.log(userId)
        // update user in database
        const userDetails = await User.findById(userId)
        const profileDetails = await Profile.findById(userDetails.profile)

        // file
        const file = req.file;
        const fielUrl = getDataUri(file)
        const cloudResponse = await cloudinary.uploader.upload(fielUrl.content)
        // update user
        const updateUser = await User.findByIdAndUpdate(userId, {
            fullName,
            phoneNumber
        })
        await updateUser.save()

        // update profile
        const skilled = skills.split(',')
        profileDetails.bio = bio;
        profileDetails.skills = skilled;

        if (cloudResponse) {
            profileDetails.resume = cloudResponse.secure_url,
                profileDetails.profilePhoto = cloudResponse.secure_url
        }

        await profileDetails.save()

        const updateUserDetails = await User.findById(userId).populate('profile').exec()

        return res.status(200).json({
            success: true,
            message: 'Profile Updated Successfully',
            updateUserDetails
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}