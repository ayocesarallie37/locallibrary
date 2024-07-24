const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLenght:3,maxLenght: 100 }
});

// Virtual for author's full name
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
