const db = require('./data-base/index');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const utility = require('./utility')



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