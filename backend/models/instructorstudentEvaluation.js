const mongoose = require("mongoose");

const InstructorStudentEvaluationSchema = new mongoose.Schema(
  {
    instructor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    evaluation_criteria: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100, // Adjust max score as per evaluation criteria
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const InstructorStudentEvaluation = mongoose.model("InstructorStudentEvaluation", InstructorStudentEvaluationSchema);
module.exports = InstructorStudentEvaluation;
