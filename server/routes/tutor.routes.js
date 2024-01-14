import express from "express";
import { pollTutorAvailability } from "../controllers/tutorAvailabilityController.js";


const router = express.Router();

router.post('/start-polling', (req, res) => {
    pollTutorAvailability();
    res.status(200).send('Polling started successfully');
  });




export default router;