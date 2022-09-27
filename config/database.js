const mongoose = require("mongoose");
const MONGO_URL = "mongodb://mongo_app/medicale";
// const MONGO_URL = "mongodb://127.0.0.1:27017/PlateformeMedicale";
//const MONGO_URL = "mongodb+srv://Password:Password@cluster0.otpuaqa.mongodb.net/?retryWrites=true&w=majority";
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
      })
      .then(console.log("database connected succefully"))
      .catch((e) => {
        console.log("unable to connect to the datbase , error :", e);
      });
  }
}
module.exports = new Database();
