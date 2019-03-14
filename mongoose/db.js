const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/students';//Replace with any working env DB String
mongoose.connect(dbURL,
{ 
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.once('open',() =>{
    console.log('database connnected')
});

module.exports = {
    mongoose
}