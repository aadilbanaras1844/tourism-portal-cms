
const { citiesModel, citiesSchema } = require("../../models");

const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

let citiesService = new Cruds( citiesModel,  citiesSchema )

const countryService = require('./countries.service');
const provinceService = require('./provinces.service');
const { stringArrToUri } = require('./../../helpers');

citiesService.updateNew = async function(id, params){
    params.link_url = await getLink(params);
    return citiesService.update(id, params)
}
citiesService.createNew = async function(params){
    params.link_url = await getLink(params);;
    return citiesService.create(params)
}

const getLink = async function(params){
    let countryName = '';
    let provinceName = '';
    if( params.country_id ){
        let country = await countryService.get( params.country_id )
        countryName = country.name;
    }
    if( params.province_id ){
        let province = await provinceService.get( params.province_id )
        provinceName = province.name;
    }
    return stringArrToUri([ params.name, provinceName, countryName ]);
}


module.exports = citiesService;

