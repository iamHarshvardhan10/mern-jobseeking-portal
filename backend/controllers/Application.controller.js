// applyJob functionality

import { Application } from "../model/Application.model"
import { Job } from "../model/Job.model"

export const applyJob = async (req, res) => {
    try {
        const userId = req.user.userId
        const jobId = req.params.id
        if (!jobId) {
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            })
        }

        // check if the user has already applied for the job

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            })
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        // create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        })

        job.applications.push(newApplication._id)
        await job.save()


        return res.status(201).json({
            message: 'Job Applied Successfully',
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error applying job',
            error: error.message
        })
    }
}