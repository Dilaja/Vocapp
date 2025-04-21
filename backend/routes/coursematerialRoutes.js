const express = require("express");
const router = express.Router();
const coursematerialController = require("../controllers/coursematerialController");
const upload = require("../middleware/multerConfig"); // Custom multer config

// Apply multer middleware here
router.post("/add", upload.single("file"), coursematerialController.addCourseMaterial);

router.get("/all", coursematerialController.getAllMaterials);
router.get("/:id", coursematerialController.getMaterialById);
router.put("/:id", coursematerialController.updateMaterial);
router.delete("/:id", coursematerialController.deleteMaterial);
router.get("/student/materials/:id", coursematerialController.getstudentcourseMaterials);

module.exports = router;


