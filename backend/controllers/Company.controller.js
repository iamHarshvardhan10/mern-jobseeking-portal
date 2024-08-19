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