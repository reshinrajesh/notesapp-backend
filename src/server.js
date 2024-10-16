const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongoDBPath = "mongodb+srv://reshin:reshin2022@cluster0.isovf.mongodb.net/notesdb";
mongoose.connect(mongoDBPath).then(function() {
    app.get("/", function (req, res) {
        const response = { message: 'Server is running' };
        res.json(response);
    });

    const noteRouter = require('./routes/Notes');
    app.use("/notes", noteRouter);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, function () {
        console.log('Server is running on port ' + PORT);
    });
});
