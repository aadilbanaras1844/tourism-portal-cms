
const { currencyRatesModel, currencyRatesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let currencyRatesService = new Cruds( currencyRatesModel, currencyRatesSchema )

module.exports = currencyRatesService;

