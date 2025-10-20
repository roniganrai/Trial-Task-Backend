import asyncHandler from "express-async-handler";
import Resume from "../models/Resume.js";

// Add hackathon achievement (authenticated)
export const addHackathon = asyncHandler(async (req, res) => {
  const { title, position, year } = req.body;
  const userId = req.user._id;
  let resume = await Resume.findOne({ userId });
  if (!resume) {
    // create blank resume if not exists
    resume = await Resume.create({ userId, name: "", userId });
  }
  // push to certifications (or a dedicated achievements array)
  const certText = `${title} — ${position} (${year || ""})`;
  resume.certifications = resume.certifications || [];
  resume.certifications.push(certText);
  await resume.save();
  res.json(resume);
});

// Add course achievement (authenticated)
export const addCourse = asyncHandler(async (req, res) => {
  const { courseName, provider, year } = req.body;
  const userId = req.user._id;
  let resume = await Resume.findOne({ userId });
  if (!resume) resume = await Resume.create({ userId });
  const certText = `${courseName} — ${provider} (${year || ""})`;
  resume.certifications = resume.certifications || [];
  resume.certifications.push(certText);
  await resume.save();
  res.json(resume);
});
