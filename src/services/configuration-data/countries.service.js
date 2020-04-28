
const { countriesModel, countriesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let countriesService = new Cruds( countriesModel,  countriesSchema )


countriesService.updateNew = function(id, params){
    params.link_url = getLink(params);;
    return countriesService.update(id, params)
}
countriesService.createNew = function(params){
    params.link_url = getLink(params);;
    return countriesService.create(params)
}

const getLink = function(params){
    return params.name.toLowerCase();
}

module.exports = countriesService;

