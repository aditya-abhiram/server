const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    userId: String,
    name: String,
    idNumber: String,
    degree: String,
    firstDegree: String,
    secondDegree: String,
});

const studentdb = mongoose.model("student", studentSchema);

module.exports = studentdb;
