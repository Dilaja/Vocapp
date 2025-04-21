const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/messagingController");

// Send a message
router.post("/send", sendMessage);

// Get all messages for a user
router.get("/:userId", getMessages);

// Delete a message
router.delete("/:messageId", deleteMessage);

module.exports = router;
