const { medicalInsuranceModel, medicaclInsuranceSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( medicalInsuranceModel, medicaclInsuranceSchema )

module.exports = myService;
