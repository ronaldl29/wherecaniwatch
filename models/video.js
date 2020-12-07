const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: false
    },
    category: { 
        type: String,
        enum: ["Movie", "Show", "Anime"],
        required: true
    },
    onNetflix: {
        type: Boolean,
        default: false
    },
    netflixLink: {
        type: String,
        required: false
    },
    onHulu: {
        type: Boolean,
        default: false
    },
    huluLink: {
        type: String,
        required: false
    },
    onPrime: {
        type: Boolean,
        default: false
    },
    primeLink: {
        type: String,
        required: false
    }
},
   {timestamps: true}
);

module.exports = mongoose.model("Video", videoSchema);