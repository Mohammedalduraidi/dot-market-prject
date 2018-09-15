const db = require('./data-base/index');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const utility = require('./utility')
const multer = require('multer');
const fs = require('fs');
const uuidv4 = require('uuid/v4')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('jackel jackel jackel jackel jackel', cb)
        /*
          Files will be saved in the 'uploads' directory.
        */
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        /*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
        const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
    },
});
const upload = multer({ storage })
exports.uploadImage = upload.single('selectImage'), (req, res) => {
    const FILE = req.file;
    var base64data = new Buffer(data, 'binary');
    fs.readFile(FILE.path, (err, data) => {
        console.log("data dtaa", data)
        if (err) { throw err; }
        // convert to 64base data
        var base64data = new Buffer(data, 'binary');

    })
}

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.sendStatus(200);
    })
}

//Login Authentications
exports.login = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        db.manageSchema.findOne({ username: username }, (err, found) => {
            if (!found) {  //if the admin does not exist 
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        throw err;
                    }
                    bcrypt.hash(password, salt, (err, hash) => {

                        let admin = new db.manageSchema({
                            username: username,
                            password: hash
                        });
                        admin.save((err, data) => {
                            if (err) {
                                throw err;
                            }

                            utility.createSession(req, res, data.username);

                        });
                    });
                });
            } else {
                bcrypt.compare(password, found.password, (err, admin) => {
                    if (admin) {
                        utility.createSession(req, res, found.username);
                    } else {
                        throw err;
                    }
                })
            }
        })

    } else {
        res.sendStatus(404)
    }
}