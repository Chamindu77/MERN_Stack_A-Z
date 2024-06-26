const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());


//GET
app.get('/users', (req, res) => {
    controller.getUsers((req,res,next) => {
        res.send();
    });
});

//POST
app.post('/createuser',(req,res) => {
    controller.addUser(req.body,(callback) => {
        res.send();
    });
});

//UPDATE
app.post('/updateuser',(req,res) => {
    controller.updateUser(req.body,(callback) => {
        res.send(callback);
    });

    
});

//DELETE
app.post('/deleteuser',(req,res) => {
    controller.deleteUser(req.body,(callback) => {
        res.send(callback);
    });

});


module.exports = app;