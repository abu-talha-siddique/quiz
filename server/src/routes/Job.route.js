import express from "express";

const JobRoute = express.Router();

import { jobCreate, fetchJob, deleteJob } from "../controller/Job.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

JobRoute.post('/jobCreate', authenticateUser, jobCreate);
JobRoute.get('/fetchJob', authenticateUser, fetchJob);
JobRoute.post('/deleteJob', authenticateUser, deleteJob);

export default JobRoute;