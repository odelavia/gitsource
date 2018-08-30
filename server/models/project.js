const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectUsersSchema = new Schema({
 _id: String,
 status: String
});

const ProjectSchema = new Schema({
 id: String, 
 title: {
     type: String,
     required: true
 },
 categories: {
     type: [String],
     required: true
 },
 description: String,
 stack: [String],
 status: String,
 repoUrl: String,
 img: [String],
 users: [ProjectUsersSchema]
});


module.exports = mongoose.model('Project', ProjectSchema);