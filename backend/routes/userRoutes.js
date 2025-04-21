const express = require("express");
const { addUser, getAllUsers, getUser, updateUser, deleteUser ,activateUser,changePassword ,getStudentusers } = require("../controllers/userController");

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getAllUsers);
router.get("/students", getStudentusers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/activate/:token", activateUser);
router.post('/changepassword', changePassword);

module.exports = router;
