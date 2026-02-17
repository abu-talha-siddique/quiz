import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {
        type: Number
    },
    qualification: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    personalDetails: {
        type: Array
    }
})

const personData = mongoose.model("user", personSchema);

export default personData; 