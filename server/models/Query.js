const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subject: {
    type: String,
    required: [true, "Please provide a subject"],
  },
  desc: {
    type: String,
    required: [true, "Please mention the query"],
  },
  profile_pic_link: {
    type: String,
  },
  tag: {
    type: String,
  },
});

const Query = mongoose.model("Admin", querySchema);

module.exports = Query;
