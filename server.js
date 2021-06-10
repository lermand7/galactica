// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

var redirector = require("redirect-https")({
    body: "<!-- Hello Developer! Please use HTTPS instead: {{ URL }} -->"
});

const routes = require('./routes/api');

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dbpassword@galactica.qkczg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.use("/", redirector);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));