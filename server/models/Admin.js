const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    email: {
        type: String,
        required: [true, "User should have a Email"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "User should have a username"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "User should have a name"]
    },
    password: {
        type: String,
        required: [true, "User should have a password"],
    },
    mailVerified: {
        type: Boolean,
        default: true
    },
    profile_pic: {
        image_url: {
            type: String,
            // required: [true, "User should have a  image url"],
            default: "https://res.cloudinary.com/dprscch9k/image/upload/v1677739579/Well%20Care/k6njbwcuucgeqkmv9sft.png",
        },
        file_name: {
            type: String,
            // required: [true, "User should have a  image file_name"]
        }
    },
    type: {
        type: String,
        default: "Admin"
    },
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;