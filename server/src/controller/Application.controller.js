import mongoose from "mongoose";
import userData from "../schema/UserData.js";
import adminData from "../schema/AdminData.js";
import jobData from "../schema/JobData.js";
import applicationData from "../schema/ApplicationData.js";
import { congratulationMail } from "../middleware/congratulationMail.js";

export const fetchNotification = async (req, res) => {
    try {
        const jobExists = await jobData.find({});

        res.status(201).json({
            success: true,
            data: jobExists,
        });

    }
    catch (error) {
        console.log(error);
    }
}

export const application = async (req, res) => {
    try {
        const adminExists = await adminData.findOne({ ferm: req.body.ferm });

        if (adminExists) {
            const jobExists = await jobData.findOne({ refId: adminExists._id, role: req.body.role });

            res.status(201).json({
                success: true,
                data: adminExists,
                message: jobExists,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const submitForm = async (req, res) => {
    try {
        const ifExists = await applicationData.findOne(
            {
                refId: req.user.id,
                ferm: req.body.ferm,
                role: req.body.role,
            }
        );
        if (ifExists) {
            res.status(201).json("application already submitted");
        }
        else {
            const submittedForm = new applicationData({
                refId: req.user.id,
                ferm: req.body.ferm,
                role: req.body.role,
                name: req.user.name,
                email: req.user.email,
                imageUrl: req.body.imageUrl,
                document: req.body.document,
                pdfUrl: req.body.pdfUrl,
                yourself: req.body.yourself
            })
            const submitted = await submittedForm.save();

            res.status(201).json({
                success: true,
                message: "application submitted"
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchCandidates = async (req, res) => {
    try {
        const ifExists = await applicationData.find(
            {
                ferm: req.user.ferm,
                role: req.body.role,
            }
        );

        res.status(201).json({
            success: true,
            message: ifExists
        });

    }
    catch (error) {
        console.log(error);
    }
}

export const fetchPastApplication = async (req, res) => {
    try {
        const ifExists = await applicationData.find(
            {
                refId: req.user.id,
                email: req.user.email,
            }
        );

        res.status(201).json({
            success: true,
            message: ifExists
        });

    }
    catch (error) {
        console.log(error);
    }
}

export const acceptConfirmation = async (req, res) => {
    try {
        const ifExists = await applicationData.findOne(
            {
                name: req.body.name,
                email: req.body.email,
                ferm: req.user.ferm,
                role: req.body.role,
            }
        );

        if (ifExists) {
            const accepted = await applicationData.updateOne(
                {
                    _id: ifExists._id
                },
                {
                    status: true,
                }
            );

            // to send the mail
            congratulationMail(req.body.name, req.body.email, req.user.ferm, req.body.role);

            res.status(201).json({
                success: true,
                message: "accepted",
            });
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const fetchProfile = async (req, res) => {
    try {
        const ifExists = await applicationData.findOne(
            {
                name: req.body.name,
                email: req.body.email,
                ferm: req.user.ferm,
                role: req.body.role,
            }
        );

        if (ifExists) {
            const profileData = await userData.findOne(
                {
                    _id: ifExists.refId,
                    email: ifExists.email,
                }
            );

            res.status(201).json({
                success: true,
                data: ifExists,
                message: profileData,
            });
        }

    }
    catch (error) {
        console.log(error);
    }
}