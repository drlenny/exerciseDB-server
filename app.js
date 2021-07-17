const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const password = process.env.password

mongoose.connect(`mongodb+srv://admin-daniel:${password}@cluster0.jwvsj.mongodb.net/exerciseDB?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

console.log(process.env.password)

// const routineRouter = require('./routes/routine-router')

const routineSchema = {
    title: String,
    content: String
}

const Routine = mongoose.model('Routine', routineSchema)

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/routines', function (req, res) {
    Routine.find(function(err, foundRoutines){
       res.send(foundRoutines); 
    })
})

// app.use('/api', routineRouter)

let port = process.env.PORT || 3005

app.listen(port, function () {
    console.log("Server started on port succesfully");
});