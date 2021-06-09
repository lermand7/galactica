const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NameSchema = new Schema({
    name: String
});

const name = mongoose.model('name', NameSchema);

module.exports =  name;