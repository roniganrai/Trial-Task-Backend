import asyncHandler from "express-async-handler";
import Resume from "../models/Resume.js";

// @desc Create or update resume for user
// @route POST /api/resume
// @access Private
export const upsertResume = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = req.body;

  let resume = await Resume.findOne({ userId });
  if (resume) {
    // update
    resume = await Resume.findOneAndUpdate(
      { userId },
      { $set: data },
      { new: true, runValidators: true }
    );
    return res.json(resume);
  } else {
    // create
    const newResume = await Resume.create({ userId, ...data });
    return res.status(201).json(newResume);
  }
});

// @desc Get resume for user
// @route GET /api/resume/:userId
// @access Public (but private version also below)
export const getResumeByUserId = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ userId: req.params.userId });
  if (!resume) {
    res.status(404);
    throw new Error("Resume not found");
  }
  res.json(resume);
});

// @desc Get resume for current user
// @route GET /api/resume/me
// @access Private
export const getResumeMe = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ userId: req.user._id });
  if (!resume) return res.json({ message: "No resume yet" });
  res.json(resume);
});

// @desc Delete resume
// @route DELETE /api/resume/me
// @access Private
export const deleteResume = asyncHandler(async (req, res) => {
  await Resume.findOneAndDelete({ userId: req.user._id });
  res.json({ message: "Resume deleted" });
});
