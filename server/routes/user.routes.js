import express from "express";
import { login, register,postDoubts,getDoubts } from "../controllers/user.controller.js";
import isLoggedIn from "../midddlewares/authentication.js"

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/',isLoggedIn, postDoubts);
router.get('/list',isLoggedIn, getDoubts);


export default router;