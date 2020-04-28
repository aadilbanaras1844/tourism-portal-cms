

const { usersModel, usersForDataSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( usersModel, usersForDataSchema )

module.exports = myService;