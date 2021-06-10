// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.enable('trust proxy');
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dbpassword@galactica.qkczg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(morgan('tiny'));
app.use('/api', routes);
app.use(function(request, response, next) {

    if (process.env.NODE_ENV === 'production' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));