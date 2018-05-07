const mongoose = require('mongoose')
const validate = require('mongoose-validator')

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Invalid Email address. Please try again'
  })
]

const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator
  },
  votation: [
    {
      votationStarted: Date(),
      entrants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          max: [3, 'You can only vote 3 entrants every 10 minutes']
        }
      ]
    }
  ]
})

const UserModel = mongoose.model('User', UserModel)

module.exports = UserModel
