import mongoose from "mongoose";

const educationSchema = mongoose.Schema(
  {
    institute: String,
    period: String,
    detail: String,
  },
  { _id: false }
);

const projectSchema = mongoose.Schema(
  {
    title: String,
    tech: String,
    period: String,
    bullets: [String],
  },
  { _id: false }
);

const resumeSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: String,
    contact: String,
    links: {
      linkedin: String,
      github: String,
      portfolio: String,
    },
    location: String,
    profile: String,
    education: [educationSchema],
    skills: [String],
    projects: [projectSchema],
    internship: {
      org: String,
      period: String,
      bullets: [String],
    },
    certifications: [String],
    additional: {
      languages: [String],
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
