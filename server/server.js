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


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../manage-project/dist/manage-project/index.html')))
})
const port = 4000
app.listen(port, () => {
    console.log('Hello world is working on port: ' + port)
})