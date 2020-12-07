require('dotenv').config();

const express = require('express');
const app = express();
const Video = require('./models/Video');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/wherecaniwatch", { useNewUrlParser: true, useUnifiedTopology: true });

// @route    GET /
// @desc     Get index page
// @access   Public
app.get('/', async (req, res) => {
    try {
        res.render("index", {title: "Where Can I Watch"});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route    GET /create
// @desc     Get create video page
// @access   Public
app.get('/create', async (req, res) => {
  try {
      res.render("create", {title: "Create Video"});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST /create/video
// @desc     Create video
// @access   Private
app.post('/create', async (req, res) => {
  try {
    if(req.body.password === process.env.PASSWORD){
      const video = new Video({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        category: req.body.category,
        sources: [{
          name: req.body.sourceName,
          link: req.body.sourceLink
        }]
      });

      video.save();
    } else {
      throw new Error('Incorrect password');
    }
  } catch (err) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));