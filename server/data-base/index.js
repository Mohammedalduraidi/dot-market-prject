const mongoose = require('mongoose');
mongoose.connect('mongodb://manage:Jackel12@ds157762.mlab.com:57762/manage-project');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});


let Schema = mongoose.Schema; // Create a mongoose schema 

let manageSchema = new Schema({
    username: { type: String },
    password: { type: String },
    equipmentName: { type: String },
    serialNumber: { type: Number },
    image: { type: String },
    id: { type: Number },
    employeeName: { type: String },
    nationality: { type: String },
    jobTitle: { type: String },
    projectName: { type: String },
    type: { type: String },
    fromDate: { type: Date },
    toDate: { type: Date }
})

manageSchema = mongoose.model('manageSchema', manageSchema);
module.exports.manageSchema = manageSchema;
