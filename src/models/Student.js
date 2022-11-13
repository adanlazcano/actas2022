const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// STUDENT MODEL
const StudentSchema = new Schema(
  {
    code: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    career: {
      type: String,
    },
    picture: {
      type: String,
    },
    actas: [{ type: Schema.Types.ObjectId, ref: "Acta" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Student", StudentSchema);
