// register company 

import { Company } from "../model/Company.model.js";

export const registerCompany = async (req, res) => {
    try {
        // destructure from body
        const { companyName } = req.body;
        // check 
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            })
        }
        // find by name
        const company = await Company.findOne({ name: companyName })
        if (company) {
            return res.status(400).json({
                message: "Company already exists",
                success: false
            })
        }
        // create new company
        const createCompany = await Company.create({
            name: companyName,
            userId: req.user.id
        })

        return res.status(200).json({
            success: true,
            message: 'Company Created Successfully',
            createCompany
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}


// get company by user

export const getCompany = async (req, res) => {
    try {
        const userId = req.user.id
        console.log(userId)

        // find company by userID
        const company = await Company.find({ userId })
        console.log(company)
        if (!company) {
            return res.status(400).json({
                success: false,
                message: 'No Company Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Company Found',
            company
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

// get single company details 

export const getSingleCompany = async (req, res) => {
    try {
        const companyId = req.params.id
        console.log(companyId)
        if (!companyId) {
            return res.status(400).json({
                success: false,
                message: 'Company ID is required'
            })
        }
        // find company by ID
        const company = await Company.findById(companyId)
        // check validation
        if (!company) {
            return res.status(400).json({
                success: false,
                message: 'Company Not Found with this ID'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Company Found',
            company
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false
        })
    }
}

// update company 

export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        if (!name || !description || !website || !location) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all fields'
            })
        }
        const companyId = req.params.id
        console.log(companyId)
        // find company by ID
        const company = await Company.findByIdAndUpdate(companyId, { name, description, website, location }, { new: true })
        // check validation
        if (!company) {
            return res.status(400).json({
                success: false,
                message: 'Company Not Found with this ID'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Company Updated',
            company
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}