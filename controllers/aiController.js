import asyncHandler from "express-async-handler";

/*
  POST /api/ai/generate-summary
  Body: { profile, skills, projects, internship, education }
  Returns: { summary: "..." }
*/
export const generateSummary = asyncHandler(async (req, res) => {
  const { profile, skills = [], projects = [], internship = {} } = req.body;

  // If profile provided, prefer it (trim/limit)
  if (profile && profile.trim().length > 40) {
    const trimmed = profile.trim();
    const summary =
      trimmed.length > 500 ? trimmed.slice(0, 500) + "..." : trimmed;
    return res.json({ summary });
  }

  // Otherwise synthesize a short summary
  const skillSample = skills.slice(0, 6).join(", ");
  const projectCount = projects.length;
  const org = internship.org || "";
  const internText = org ? ` Interned at ${org}.` : "";

  let summary = `Passionate software developer skilled in ${
    skillSample || "web technologies"
  }.`;
  if (projectCount)
    summary += ` Built ${projectCount} project${
      projectCount > 1 ? "s" : ""
    } showcasing hands-on experience.`;
  summary += internText;
  summary = summary.trim();

  // length limit
  if (summary.length > 500) summary = summary.slice(0, 500) + "...";
  res.json({ summary });
});
