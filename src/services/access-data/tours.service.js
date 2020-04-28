
const { toursModel, toursSchema } = require("../../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('../Cruds');
const countryService = require('./../configuration-data/countries.service');
const cityService = require('./../configuration-data/cities.service')
const { stringArrToUri } = require('./../../helpers')

let myService = new Cruds( toursModel, toursSchema )

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
        console.log('query ', query)
        let output = await toursModel.find({$text: {$search: query}})
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
    let cities = '';
    if( params.city_id ){
        let tmpCity = params.city_id.map(obj => obj.name);
        cities = tmpCity.join(' ')
    }
    return stringArrToUri([ params.headline, cities, countryName ]);
}

const getTags = async function(params){
    let tags = [];
    if( params.country_id ){
        let country = await countryService.get( params.country_id )
        tags.push( country.name )
    }
    if( params.cities ){
        for (let index = 0; index < params.cities.length; index++) {
            const city = params.cities[index];
            tags.push(city.name)
        }
    }
    if( params.areatypes ){
        for (let index = 0; index < params.areatypes.length; index++) {
            const areaType = params.areatypes[index];
            tags.push(areaType.name)
        }
    }
    if(params.headline){
        let tmpArr = params.headline.split(" ")
        tags = tags.concat(tmpArr)
    }
    return tags
}

module.exports = myService;