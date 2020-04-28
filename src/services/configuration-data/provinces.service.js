

const { provincesModel, provincesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');

const countryService = require('./countries.service')
const { stringArrToUri } = require('./../../helpers')

let provincesService = new Cruds( provincesModel,  provincesSchema )

provincesService.updateNew = async function(id, params){
    params.link_url = await getLink(params);
    return provincesService.update(id, params)
}
provincesService.createNew = async function(params){
    params.link_url = await getLink(params);;
    return provincesService.create(params)
}

const getLink = async function(params){
    let countryName = '';
    if( params.country_id ){
        let country = await countryService.get( params.country_id )
        countryName = country.name;
    }
    return stringArrToUri([ params.name, countryName ]);
}


module.exports = provincesService;
