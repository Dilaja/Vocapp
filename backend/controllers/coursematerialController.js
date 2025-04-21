const CourseMaterial = require("../models/courseMaterial");
const CourseApplication = require("../models/courseApplication");
const ApplyCourse = require("../models/ApplyCourse");

const multer = require("multer");

// Define upload logic
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });
exports.upload = upload; //

// Add New Course Material
exports.addCourseMaterial = async (req, res) => {
  try {
    const { title, type, course_id } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newMaterial = new CourseMaterial({
      title,
      type,
      course_id,
      filename: req.file.filename,
      fileurl: `/uploads/${req.file.filename}`,
    });

    await newMaterial.save();

    res.status(201).json({ message: "Material uploaded successfully", material: newMaterial });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Failed to upload material", error: err.message });
  }
};

//
exports.getstudentcourseMaterials = async (req, res) => {
  try {
    const applications = await CourseApplication.find({ user_id: req.params.userId });
    const appIds = applications.map(app => app._id);

    const enrolledCourses = await ApplyCourse.find({
      application_id: { $in: appIds },
      is_enrolled: true,
    });

    const courseCodes = enrolledCourses.map(course => course.course_code);

    const materials = await CourseMaterial.find({
      course_code: { $in: courseCodes },
    });

    // Group materials by course_code
    const grouped = courseCodes.map(code => ({
      course_code: code,
      modules: materials
        .filter(mat => mat.course_code === code)
        .map(mod => ({
          title: mod.module_title,
          materials: mod.materials,
        }))
    }));

    res.json(grouped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
// Get All Course Materials
exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await CourseMaterial.find().populate("course_id");
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Course Material by ID
exports.getMaterialById = async (req, res) => {
  try {
    const material = await CourseMaterial.findById(req.params.id).populate("course_id");
    if (!material) return res.status(404).json({ message: "Material not found" });

    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Course Material
exports.updateMaterial = async (req, res) => {
  try {
    const updatedMaterial = await CourseMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMaterial) return res.status(404).json({ message: "Material not found" });

    res.status(200).json({ message: "Material updated successfully", material: updatedMaterial });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Course Material
exports.deleteMaterial = async (req, res) => {
  try {
    const deletedMaterial = await CourseMaterial.findByIdAndDelete(req.params.id);
    if (!deletedMaterial) return res.status(404).json({ message: "Material not found" });

    res.status(200).json({ message: "Material deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
