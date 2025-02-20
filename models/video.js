const mongoose = require("mongoose");

const sourceSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Netflix", "Hulu", "Prime", "Apple", "Disney", "Peacock", "Crunchyroll"]
    },
    link: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    }
})

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    fullSizeImage: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: false
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
    sources: [{
        type: sourceSchema
    }],
    genre: [{
        type: String,
        enum: ["Comedy", "Horror", "Action", "Drama"],
    }]
}, { timestamps: true });

const videoModel = mongoose.model("Video", videoSchema);

module.exports = videoModel;