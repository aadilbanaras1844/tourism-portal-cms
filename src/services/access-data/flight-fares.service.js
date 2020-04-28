
const { flightFaresModel, flightFaresSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( flightFaresModel,  flightFaresSchema )

module.exports = myService;

