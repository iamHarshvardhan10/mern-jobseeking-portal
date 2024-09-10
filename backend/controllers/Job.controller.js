// Post Job 

import { Job } from "../model/Job.model.js";

export const postJob = async (req, res) => {
    try {
        // destructure from req body
        const { title, description, requirements, salary, location, exLevel, jobType, position, companyId, created_by } = req.body;

        // check all field
        if (!title || !description || !requirements || !salary || !exLevel || !location || !jobType || !position || !companyId || created_by) {
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


// get All Jobs

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } }
            ]
        }

        const jobs = await Job.find(query)
            .populate({ path: 'company' })
            .populate({ path: 'created_by' })
            .sort({ createdAt: -1 })
        if (jobs.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No jobs found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Jobs retrieved successfully",
            jobs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get Job by Id

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
            .populate({ path: 'company' })

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'No Job Found'
            })
        }

        return res.status(200).json({
            success: true,
            message: "Job retrieved successfully",
            job
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


// get admin jobs

export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.user.id;
        const jobs = await Job.find({ created_by: adminId })
            .populate({ path: 'company' });
        if (!jobs) {
            return res.status(404).json({
                success: false,
                message: 'No Jobs Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: "Jobs retrieved successfully",
            jobs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



// get all jobs from database

export const getAllJobsForUser = async (req, res) => {
    try {
        const jobs = await Job.find({}).populate({ path: 'company' })

        if (jobs.length === 0) {
            return res.status(404).json({
                message: 'No Jobs Found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'All Jobs Retrived Successfully',
            jobs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}