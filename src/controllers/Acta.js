const Acta = require("../models/Acta.js");
const Student = require("../models/Student.js");

//Create Acta and asign it to student
const createActa = async (req, res) => {
  try {
    const { idStudent } = req.body;
    const student = await Student.findById(idStudent);
    const acta = new Acta(req.body);
    const createdActa = await acta.save();
    student.actas = student.actas.concat(createdActa._id);
    await student.save();
    res.status(200).json({ message: "Acta creada satisfactoriamente." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update or Delete relation between student & acta
const deleteActa = async (req, res) => {
  try {
    const actaStudent = await Student.findById(req.body.idStudent);
    await actaStudent.updateOne({ $pull: { actas: req.params.id } });
    await Acta.findByIdAndDelete(req.params.id);
    res.status(200).json(actaStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createActa,
  deleteActa,
};
