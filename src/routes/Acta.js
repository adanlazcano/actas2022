const express = require("express");
const { createActa, deleteActa } = require("../controllers/Acta.js");

const ActaRoute = express.Router();

//Create Acta and asign it to student
ActaRoute.post("/", createActa);
// Update or Delete relation between student & acta
ActaRoute.put("/:id", deleteActa);

module.exports = ActaRoute;
