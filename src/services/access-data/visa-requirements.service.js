
const { visaRequirementsModel, visaRequirementsSchema} = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( visaRequirementsModel, visaRequirementsSchema)

module.exports = myService;