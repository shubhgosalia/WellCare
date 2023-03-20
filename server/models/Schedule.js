const mongoose = require("mongoose");
//for now not considering multiple booking of time slots in a row by one person

const ScheduleSchema = new mongoose.Schema({
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    reason: {
        type: String,
        required: [true, "Please mention the reason"],
        default: "Appointment"
    },
    slot_blocked_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    isBookedByDoc: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: [true, "Please enter the date"]
    },
    startTime: {
        type: Number,
        required: [true, "Please enter the start time"]
    },
    endTime: {
        type: Number,
        required: [true, "Please enter the end time"]
    },
    //apointment type
    isOnline: {
        type: Boolean,
        required: [true, "Please enter the mode"],
        default: true,
    },
    timestamp: {
        type: Date,
        default: new Date()
    },
    // initially it will be false when booked but after the session completes it will be set to true and will be considered as a part of history.
    status: {
        type: Boolean,
        default: false
    }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;