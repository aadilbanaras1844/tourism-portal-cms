
const { tourGuidesModel, tourGuidesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( tourGuidesModel, tourGuidesSchema )

module.exports = myService;