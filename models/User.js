const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please enter email address'
  },
  name: {
    type: String,
    required: 'Please enter your name',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  oauthToken: String,
  oauthTokenSecret: String
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})
userSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('User', userSchema)