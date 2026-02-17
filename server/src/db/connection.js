import mongoose from "mongoose";

const db = 'mongodb://localhost:27017/jobfinder';

mongoose.connect(db).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log("No Connection");
})

/*mongoose.connect("mongodb://localhost:27017/jobfinder" , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true  // it is not used with recent versions of mongoose
}).then(() => {
    console.log(`connection successful`)
}).catch((e) => {
    console.log(`No connection`);
})*/