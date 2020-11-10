const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WebProjectSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    deployLink: {
        type: String,
        required: true,
        trim: true,
    },
    githubLink: {
        type: String,
        required: true,
        trim: true,
    },
    summmary: {
        type: String,
        required: true,
        trim: true,
    },
    screenshot: {
        type: String,
        required: true,
        trim: true,
    }
});

const WebProject = mongoose.model("WebProject", WebProjectSchema);

module.exports = WebProject;