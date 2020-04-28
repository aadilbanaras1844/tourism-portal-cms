
const { destinationCountriesModel, destinationCountriesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( destinationCountriesModel,  destinationCountriesSchema )

module.exports = myService;

