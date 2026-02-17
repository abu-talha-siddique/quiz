import express from "express";

const AdminRoute = express.Router();

import { adminRegister, adminLogin, verifyToken, fetchAdmin, updateAdmin } from "../controller/Admin.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

AdminRoute.post('/adminRegister', adminRegister);
AdminRoute.post('/adminLogin', adminLogin);
AdminRoute.post('/verifyToken', authenticateUser, verifyToken);
AdminRoute.get('/fetchAdmin', authenticateUser, fetchAdmin);
AdminRoute.post('/updateAdmin', authenticateUser, updateAdmin);

export default AdminRoute;