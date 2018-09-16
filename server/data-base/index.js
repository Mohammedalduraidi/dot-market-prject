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

let adminSchema = new Schema({
    username: { type: String },
    password: { type: String }
})

let equipmentSchema = new Schema({
    name: { type: String },
    serialNumber: { type: String },
    image: { type: String }
})

let employeesSchema = new Schema({
    name: { type: String },
    Nationality: { type: String },
    jobTitle: { type: String }
})

let projectsSchema = new Schema({
    name: { type: String },
    type: { type: String },
    fromDate: { type: Date },
    toDate: { type: Date },
    employee: { type: String },
    equipment: { type: String }
})
adminSchema = mongoose.model('adminSchema', adminSchema);
equipmentSchema = mongoose.model('equipmentSchema', equipmentSchema);
employeesSchema = mongoose.model('employeesSchema', employeesSchema);
projectsSchema = mongoose.model('projectsSchema', projectsSchema);
module.exports.adminSchema = adminSchema;
module.exports.equipmentSchema = equipmentSchema;
module.exports.employeesSchema = employeesSchema;
module.exports.projectsSchema = projectsSchema;
