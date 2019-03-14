const { schema } = require('../mongoose/database')

var Student = schema.define('students', {
    first_name: {type: schema.String},
    last_name: { type:schema.String},
    email: {type:schema.String}
});


module.exports =  {
    Student
};