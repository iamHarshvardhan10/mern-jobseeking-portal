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

// get applied jobs

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } }
            }
        })

        if (!application) {
            return res.status(404).json({
                message: "No jobs applied",
                success: false
            })
        }
        return res.status(200).json({
            message: "Jobs Applied Successfully",
            success: true,
            application
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching applied jobs',
            error: error.message
        })
    }
}


// get admin jobs

export const getAdminJobs = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'application',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        })

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Job details fetched successfully",
            success: true,
            job
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching jobs',
            error: error.message
        })
    }
}


// update status

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false
            })
        }

        // find the application by application id
        const application = await Application.findById({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            })
        }

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully",
            success: true,
            application
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating status',
            error: error.message
        })
    }
}