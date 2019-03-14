const express = require('express');
const router = express.Router();
const {ObjectID} = require('mongodb');
const { Student } = require('../models/Student')
const db = require('../mongoose/db')

//getStudents
router.get('/getAllStudents',(req,res) =>{
    Student.find({}).then((students) =>{
        res.send(students)
    }).catch((err) =>{
        res.send(err);
    })
})

//get one Student

router.get('/student/:id',(req,res) =>{
    const _id = req.params.id;

    
  //if not Valid ID
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }

  Student.findById({_id}).then((student) =>{
      if(!student) res.status(404).send();
      else res.send(student);
  }).catch((err) =>{
      res.status(400).send();
  })

})

//add one student
router.post('/student',(req,res)=>{
    const {first_name,last_name,email} = req.body;
    const student = new Student({
        first_name,
        last_name,
        email
    })

    student.save().then((student) =>{
        res.send(student);
    }).catch((err)=>{
        res.status(400).send();
    })

})

module.exports = router;