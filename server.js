const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.enable('trust proxy');
app.use(requireHTTPS);
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
function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }

app.listen(PORT, console.log(`Server is starting at ${PORT}`));