const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
app.get('/', async (req, res) => {
    try {
        res.render("index");
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));