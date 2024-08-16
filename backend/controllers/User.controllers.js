import { Profile } from "../model/Profile.model.js";
import { User } from "../model/User.model.js";
import bcrypt from 'bcryptjs'
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

        // hashpassowrd 
        const hashedPassword = await bcrypt.hash(password, 10)
        // create profile 
        const profileDetails = await Profile.create({
            bio: null,
            skills: null,
            resume: null,
            resumeOriginalName: null,
            profilePhoto: null

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