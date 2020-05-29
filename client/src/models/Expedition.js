const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expeditionSchema = new Schema({
  hunts: {
    type: Array,
    trim: true,
    required: "Hunts required"
  }
});

const Expedition = mongoose.model("Expedition", expeditionSchema);

module.exports = Expedition;
