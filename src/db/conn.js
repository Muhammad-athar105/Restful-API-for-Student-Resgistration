const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/students-api', {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connection is successfull");

}).catch((error) => {
  console.log("No connection", error.message);
})


