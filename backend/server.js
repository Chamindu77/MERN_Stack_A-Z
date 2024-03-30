const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const router = require('./router');

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://chamindu77:Cn991893105@cluster0.d9kjiyz.mongodb.net/mern_test?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch{
        console.log('MongoDB Error');
    }
};

connect();

const server = app.listen(port, host, ()=>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api',router);