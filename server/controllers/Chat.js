const Chat = require('../models/Chat');

//storing the messages onto the server
exports.SendMessage = async (req, res, next) => {
    try {
        const { message, from, to } = req.body;
        let msg = String(message);
        //if doctor
        if (req.user.type === 'Doctor') {
            await Chat.create({
                message: msg,
                users: [from, to],
                doctorSender: from
            })
        }
        //if patient
        else {
            await Chat.create({
                message: msg,
                users: [from, to],
                patientSender: from
            })
        }
        return res.json({
            status: true,
        })
    }
    catch (err) {
        console.log("in the send message : ", err);
        return next(err);
    }
}

//getting the messages from the server
exports.GetMessage = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const messages = await Chat.find({
            users: {
                $all: [from, to]
            }
        }).sort({ updatedAt: 1 });


        return res.json({
            status: true,
            data: messages
        })
    }
    catch (err) {
        console.log("in the get message : ", err);
        return next(err);
    }
}