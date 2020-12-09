/*
配置mongoDB
*/ 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/info', {useNewUrlParser: true,
useUnifiedTopology: true});

let studentSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    motto: {
        type: String
    }
})

let userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    // age: {
    //     type: Number
    // },
    // gender: {
    //     type: String
    // }
})
exports.User = mongoose.model('User', userSchema)

exports.Student = mongoose.model('Student', studentSchema)