const server = require('../server');
const chai = require('chai');
const should = chai.should();
chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('checking unit test', () => {
    it('getProjects function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/getProjects')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('getEquipment function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/getEquipment')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('getEmployee function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/getEmployee')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('deleteProject function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/deleteProject')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('retrieveProjectData function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/retrieveProjectData')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('addProject function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addProject')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('deleteEmployee function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/deleteEmployee')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('retrieveEmployeeData function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/retrieveEmployeeData')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('addEmployee function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addEmployee')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
    it('deleteEquipment function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/deleteEquipment')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });

    it('retrieveEquipment function should sendStatus(200) to the client', (done) => {
        setTimeout(done, 300);
        chai.request(server)
            .get('/retrieveEquipment')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });

    it('addEquiepment function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addEquiepment')
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });

    });

    it('login function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/login')
            .end((err, res) => {

                res.should.have.status(404);
                done();
            });

    });

    it('logout function should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/logout')
            .end((err, res) => {

                res.should.have.status(200);
                done();
            });

    });

})