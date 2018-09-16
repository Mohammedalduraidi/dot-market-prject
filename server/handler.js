const db = require('./data-base/index');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const utility = require('./utility')

//Update Equipment from data-base
exports.updateEquipment = (req, res) => {
    const { name } = req.body;
    const { serialNumber } = req.body;
    const { image } = req.body;
    const { id } = req.body
    db.equipmentSchema.findOneAndUpdate({ _id: id }, { $set: { name, serialNumber, image } }, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.sendStatus(200);
        }
    });
}


//Delete the equipment from data-base
exports.deleteEquipment = (req, res) => {
    const { id } = req.body
    db.equipmentSchema.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.sendStatus(200);
        }
    })
}



//fetching the Equipments from data-base and send it to the client
exports.retrieveEquipment = (req, res) => {
    db.equipmentSchema.find({}, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data);
        }
    })
};


exports.addEquiepment = (req, res) => {
    const { name } = req.body;
    const { serialNumber } = req.body;
    const { image } = req.body;
    let Equiepment = new db.equipmentSchema({
        name,
        serialNumber,
        image
    })
    Equiepment.save((err, data) => {
        if (err) {
            throw err
        }
        res.sendStatus(200);
    })
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.sendStatus(200);
    })
};

//Login Authentications
exports.login = (req, res) => {

    const { username } = req.body;
    const { password } = req.body;
    if (username === 'admin' && password === 'admin') {
        db.adminSchema.findOne({ username: username }, (err, found) => {
            if (!found) {  //if the admin does not exist 
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        throw err;
                    }
                    bcrypt.hash(password, salt, (err, hash) => {

                        let admin = new db.adminSchema({
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
};