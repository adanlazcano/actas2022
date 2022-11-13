const Student = require("../models/Student.js");

//Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find({}).populate("actas");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create student
const saveStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get one of the students by frontend search. This method returns student's certificates
const getStudentByCode = async (req, res) => {
  try {
    const code = req.params.code;
    const regex = new RegExp(code, "i");
    const students = await Student.find({ code: { $regex: regex } }).populate(
      "actas"
    );

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getStudents,
  saveStudent,
  getStudentByCode,
};
