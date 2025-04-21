const mongoose = require("mongoose");

const InstituteCourseSchema = new mongoose.Schema(
  {
    institute_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
      required: true,
    },
    course_cat: {
      type: String,
      required: true,
      trim: true,
    },
    course_code: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // includes createdAt and updatedAt
  }
);

// Ensure a course is not mapped to the same institute multiple times
InstituteCourseSchema.index({ institute_id: 1, course_code: 1 }, { unique: true });

module.exports = mongoose.model("InstituteCourse", InstituteCourseSchema);

