
const { simCardsModel, simCardsSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let myService = new Cruds( simCardsModel, simCardsSchema )

module.exports = myService;
