import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    bio: {
        type: String,
    },
    skills: [{
        type: String
    }],
    resume: {
        type: String
    },
    resumeOriginalName: {
        type: String
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    profilePhoto: {
        type: String,
        default: ''
    }
})

export const Profile = mongoose.model('Profile', ProfileSchema)