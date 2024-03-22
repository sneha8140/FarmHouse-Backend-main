const mongoose = require("mongoose");
const dbUri = process.env.DB_URI;

mongoose.connect(dbUri);
