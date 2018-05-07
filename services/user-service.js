const UserModel = require('../models/user-model')

async function add(user) {
  return UserModel.create(user)
}

async function find(id) {
  return UserModel.findOne({ _id: id })
}

async function findByIdAndUpdate(id) {
  return UserModel.findByIdAndUpdate({ _id: id })
}

module.exports = {
  add,
  find,
  findByIdAndUpdate
}
