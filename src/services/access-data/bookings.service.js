

const { bookingsModel, bookingsSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( bookingsModel,  bookingsSchema )

module.exports = myService;

