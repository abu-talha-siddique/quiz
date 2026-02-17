// const express = require('express');

// const UserRoute = express.Router();

// const { register, login, verifyToken, updateUser , fetchUser} = require('../controller/User.controller');
// const authenticateUser = require('../middleware/auth.middleware');

// UserRoute.post('/register', register);
// UserRoute.post('/login', login);
// UserRoute.post('/verify-token',authenticateUser,verifyToken);
// UserRoute.get('/fetchUser', authenticateUser, fetchUser);
// UserRoute.post('/updateUser', authenticateUser, updateUser);

// module.exports = UserRoute ;

import express from "express";
import { login, logout, register, updateProfile } from "../controller/User.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);

export default router;
