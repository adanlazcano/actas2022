const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// ACTA MODEL
const ActaSchema = new Schema(
  {
    idStudent: {
      type: Schema.Types.ObjectId,
    },
    key: String,
    file: String,
    title: String,
    order: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Acta", ActaSchema);
