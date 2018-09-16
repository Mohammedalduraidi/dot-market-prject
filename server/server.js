const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const handler = require('./handler')
app.use(express.static(path.join(__dirname, '../manage-project/dist/manage-project')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(session({
    secret: 'very very secret',
    resave: true,
    saveUninitialized: true
}));
app.put('/saveItems', handler.saveItems)
app.get('/getProjects', handler.getProjects)
app.get('/getEquipment', handler.getEquipment)
app.get('/getEmployee', handler.getEmployee)
app.put('/updateProject', handler.updateEquipment)
app.post('/deleteProject', handler.deleteProject)
app.get('/retrieveProjectData', handler.retrieveProjectData)
app.post('/addProject', handler.addProject)
app.put('/updateEmployee', handler.updateEmployee);
app.post('/deleteEmployee', handler.deleteEmployee);
app.get('/retrieveEmployeeData', handler.retrieveEmployeeData);
app.post('/addEmployee', handler.addEmployee);
app.put('/updateEquipment', handler.updateEquipment);
app.post('/deleteEquipment', handler.deleteEquipment);
app.get('/retrieveEquipment', handler.retrieveEquipment);
app.post('/addEquiepment', handler.addEquiepment);
app.post('/login', handler.login);
app.get('/logout', handler.logout);
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../manage-project/dist/manage-project/index.html')))
})

const PORT = process.env.PORT || 4000;
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`Hello world is working on port: ${PORT}`);
    });
}

module.exports = app;