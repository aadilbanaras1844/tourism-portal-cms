
const { currenciesModel, currenciesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let currenciesService = new Cruds( currenciesModel, currenciesSchema )

module.exports = currenciesService;

