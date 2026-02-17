import express from "express";

const router = express.Router();

import {
    fetchNotification, application, submitForm,
    fetchCandidates, fetchPastApplication,
    acceptConfirmation, fetchProfile
}
    from "../controller/Application.controller.js";

import authenticateUser from "../middleware/auth.middleware.js";

router.get('/fetchNotification', authenticateUser, fetchNotification);
router.post('/application', authenticateUser, application);
router.post('/submitForm', authenticateUser, submitForm);
router.post('/fetchCandidates', authenticateUser, fetchCandidates);
router.get('/fetchPastApplication', authenticateUser, fetchPastApplication);
router.post('/acceptConfirmation', authenticateUser, acceptConfirmation);
router.post('/fetchProfile', authenticateUser, fetchProfile);

export default router;