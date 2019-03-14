const express = require('express');
const bodyParser = require('body-parser');

const students = require('./routes/students');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/students',students);

app.get('/',(req,res) =>{
    res.status(200).send({
        msg:'Visit /students url'
    })
})

app.listen(PORT,()=>{
    console.log(`server up and running on port ${PORT}`);
})
