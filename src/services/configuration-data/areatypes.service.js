
const { areaTypesModel, areaTypesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( areaTypesModel,  areaTypesSchema )

module.exports = myService;

