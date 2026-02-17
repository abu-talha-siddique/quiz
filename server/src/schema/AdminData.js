import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    ferm: {
        type: String
    },
    gmail: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    adminDetails: {
        type: Array
    }
})

const adminData = mongoose.model("admin", adminSchema);

export default adminData; 