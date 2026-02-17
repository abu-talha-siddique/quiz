import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    // Common / Discriminator
    type: { type: String },

    // Student Registration & Profile
    name: { type: String },
    email: { type: String },
    password: { type: String },
    gender: { type: String },
    mobile: { type: Number },
    qualification: { type: String },
    dob: { type: String },
    city: { type: String },
    state: { type: String },

    // Quiz Creation
    quizName: { type: String },
    duration: { type: String },
    quizDate: { type: String },
    topics: { type: String },
    instructions: { type: String },

    // Questions (embedded in Quiz)
    Query: [{
        question: String,
        opt1: String,
        opt2: String,
        opt3: String,
        opt4: String,
        answer: String
    }],

    // File Uploads (appears to be stored in a central/admin document)
    UploadedFiles: [{
        type: String,
        title: String,
        pdf: String,
        date: String
    }],

    // Student Quiz Responses
    quizId: { type: String },
    Responses: [{
        questionId: String,
        choosen: String,
        rightAnswer: String
    }],
    correct: { type: Number },
    wrong: { type: Number },
    score: { type: Number }
});

const StudentData = mongoose.model("StudentData", studentSchema);

export default StudentData;
