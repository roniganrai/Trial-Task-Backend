import express from "express";
import {
  upsertResume,
  getResumeByUserId,
  getResumeMe,
  deleteResume,
} from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// create/update resume for logged-in user
router.post("/", protect, upsertResume);

// get current user's resume
router.get("/me", protect, getResumeMe);

// delete current user's resume
router.delete("/me", protect, deleteResume);

// public read by userId
router.get("/:userId", getResumeByUserId);

export default router;
