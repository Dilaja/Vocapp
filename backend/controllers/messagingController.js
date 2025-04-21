const Messaging = require("../models/Messaging");

// Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { sender_id, receiver_id, subject, message } = req.body;

    if (!sender_id || !receiver_id || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Messaging({
      sender_id,
      receiver_id,
      subject,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all messages for a user (Inbox)
exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Messaging.find({ receiver_id: userId })
      .populate("sender_id", "name email")
      .populate("receiver_id", "name email");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;

    const deletedMessage = await Messaging.findByIdAndDelete(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
