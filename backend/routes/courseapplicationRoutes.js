const express = require("express");
const router = express.Router();
const { addApplication, getApplications, getApplicationById, updateApplication, deleteApplication,getAllApplicationsCourses,enrollStudentInCourse } = require("../controllers/courseapplicationcontroller");

router.get("/allapplications", getAllApplicationsCourses);
router.put("/enroll", enrollStudentInCourse);
router.post("/apply", addApplication);
router.get("/all", getApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);



module.exports = router;
