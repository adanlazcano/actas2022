const mongoose = require("mongoose");
const { environment } = require("./config.js");

// Database connection
try {
  const { db_url } = environment;

  const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  mongoose.connect(db_url, dbOptions);

  console.log("Connect to mongoDB");
} catch (error) {
  console.log(error.message);
}
