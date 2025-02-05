const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    dateFound: Date,
    contact: String
});

module.exports = mongoose.model("Item", ItemSchema);
