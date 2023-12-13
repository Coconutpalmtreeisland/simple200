const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    UserNum: Number,
    email: String,
    displayName: String,
    uid: String,
}, { collection: "users" });

const User = mongoose.model("User", userSchema);


module.exports = { User };