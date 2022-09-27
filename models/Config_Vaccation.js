const mongoose = require("mongoose");
Vacation = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vacation",
  },
  type_vacation: { type: String, required: true },
  maxDays: { type: Number, default: 15, required: true },
  maxDayssick: { type: Number, default: 12, required: true },
});

module.exports = Vacation = mongoose.model("Vacation", Vacation);
