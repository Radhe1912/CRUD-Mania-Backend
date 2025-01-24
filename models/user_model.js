const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    age:{
        type: Number,
    }
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;