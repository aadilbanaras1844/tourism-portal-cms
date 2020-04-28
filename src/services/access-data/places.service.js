

const { placesModel, placesSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');
const countryService = require('./../configuration-data/countries.service');
const cityService = require('./../configuration-data/cities.service');
const areaTypeService = require('./../configuration-data/areatypes.service')
const { stringArrToUri } = require('./../../helpers')


let myService = new Cruds( placesModel,  placesSchema )


myService.updateNew = async function(id, params){
    params.link_url = await getLink(params);
    params.tags = await getTags(params);;
    return myService.update(id, params)
}
myService.createNew = async function(params){
    params.link_url = await getLink(params);
    params.tags = await getTags(params);;
    return myService.create(params)
}

myService.search = async function({query=''}){
    try {
        let output = await placesModel.find({$text: {$search: query}})
        return output;
    } catch (error) {
        console.log('errr ', error)
       throw error 
    }
}

const getLink = async function(params){
    let countryName = '';
    if( params.country_id ){
        let country = await countryService.get( params.country_id )
        countryName = country.name;
    }
    let cityName = '';
    if( params.city_id ){
        let city = await cityService.get( params.city_id )
        cityName = city.name;
    }
    return stringArrToUri([ params.name, cityName, countryName ]);
}

const getTags = async function(params){
    let tags = [];
    if( params.country_id ){
        let country = await countryService.get( params.country_id )
        tags.push( country.name )
    }
    if( params.city_id ){
        let city = await cityService.get( params.city_id )
        tags.push( city.name )
    }
    if(params.areatype_id){
        let areaType = await areaTypeService.get( params.areatype_id )
        tags.push( areaType.name )
    }
    if(params.name){
        let tmpArr = params.name.split(" ")
        tags = tags.concat(tmpArr)
    }
    return tags
}


module.exports = myService;

