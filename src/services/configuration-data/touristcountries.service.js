
const { touristCountriesModel, touristCountriesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( touristCountriesModel,  touristCountriesSchema )

module.exports = myService;

