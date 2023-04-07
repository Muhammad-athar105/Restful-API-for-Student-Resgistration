const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    milength: 3
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already registered"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid Email")
      }
    }

  },
  phone: {
    type: Number,
    min: 11,
    required: true,
    unique: true

  },
  address: {
    type: String,
    required: true,
  }
});

//create a new Collection using model
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;