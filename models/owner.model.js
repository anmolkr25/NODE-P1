const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017new/");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
    gstiin: String,
});

module.exports = mongoose.model("owner", ownerSchema);