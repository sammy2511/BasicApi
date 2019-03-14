const mongoose = require('mongoose');



const StudentSchema = mongoose.Schema ({
  first_name: {
    type: String,
    required:true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = {
    Student
}