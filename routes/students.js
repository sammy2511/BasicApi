const express = require('express');
const router = express.Router();
const {ObjectID} = require('mongodb');

const { Student } = require('../models/StudModel')

//getStudents
router.get('/getAllStudents',(req,res) =>{
  Student.all((err,student) =>{
      if(!err){
          res.send(student)
      }
  })
})

//get one Student

router.get('/student/:id',(req,res) =>{
  const id = req.params.id;
    
  //if not Valid ID
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Student.findById(id,(err,student) =>{
      if(!err){
          res.send(student);
      }
  })

})

//add one student
router.post('/student',(req,res)=>{
    const {first_name,last_name,email} = req.body;
    Student.create({
        first_name : first_name,
        last_name : last_name,
        email:email
      },(err,student) =>{
          res.send(student)
      })
})

module.exports = router;