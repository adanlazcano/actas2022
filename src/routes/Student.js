const express= require('express');
const { getStudents, saveStudent, getStudentByCode }= require('../controllers/Student.js');

const StudentRoute = express.Router();

//Get all students
StudentRoute.get('/', getStudents);
//Create student
StudentRoute.post('/', saveStudent);
//Get one of the students by frontend search. This method returns student's certificates
StudentRoute.get('/:code', getStudentByCode);

module.exports = StudentRoute;