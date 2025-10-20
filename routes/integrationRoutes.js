import express from "express";
import {
  addHackathon,
  addCourse,
} from "../controllers/integrationController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/hackathon", protect, addHackathon);
router.post("/course", protect, addCourse);

export default router;
