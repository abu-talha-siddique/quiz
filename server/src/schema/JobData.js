import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    refId: {
        type: String
    },
    gmail: {
        type: String
    },
    ferm: {
        type: String
    },
    role: {
        type: String
    },
    eligibility: {
        type: String
    },
    skills: {
        type: String
    },
    salary: {
        type: Number
    },
    lastDate: {
        type: Date
    },
    aboutUs: {
        type: String
    }
})

const jobData = mongoose.model("job", jobSchema);

export default jobData; 