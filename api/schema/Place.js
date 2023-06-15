const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const placeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: "String",
  address: "String",
  photos: ["String"],
  description: "String",
  perks: ["String"],
  extraInfo: "String",
  checkIn: "Number",
  checkOut: "Number",
  maxGuests: "Number",
});

const placeModel = model("Place", placeSchema);

module.exports = {
  Place: placeModel,
};
