const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'It should have review']
    },
    users: Array,
    patientSender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctorSender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
