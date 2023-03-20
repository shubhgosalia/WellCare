const express = require('express');
const Auth = require('../Middleware/Auth');

const router = express.Router();
const { SendMessage, GetMessage } = require("../controllers/Chat");
// Route to send message
router.post("/sendMessage", Auth, SendMessage);

// Route to get message
router.post("/getMessage", Auth, GetMessage);

module.exports = router;