// Post Job 

import { Job } from "../model/Job.model.js";

export const postJob = async (req, res) => {
    try {
        // destructure from req body
        const { title, description, requirements, salary, location, exLevel, jobType, position, companyId, created_by } = req.body;

        // check all field
        if (!title || !description || !requirements || !salary || !exLevel || !location || !jobType || !position || !companyId) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        console.log(title, description, requirements, salary, location, exLevel, jobType, companyId, position)
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({
                message: "You must be logged in to post a job",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(','),
            salary,
            location,
            exLevel,
            jobType,
            position,
            company: companyId,
            created_by: userId
        })

        return res.status(201).json({
            success: true,
            message: "Job posted successfully",
            job: job,
        })

    } catch (error) {
        return res.status(500).json({
            message: "Error posting job",
            error: error.message
        })
    }
}