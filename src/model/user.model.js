const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    profileimages: { type: String, requird: true }
}, {
    timeseries: true,
    versionKey: false
})

module.exports = mongoose.model("user", userSchema)