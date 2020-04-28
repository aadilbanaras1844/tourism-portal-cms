

const { usersModel } = require("./users.model");


let {
    citiesModel, citiesSchema,
    countriesModel, countriesSchema,
    provincesModel, provincesSchema,
    areaTypesModel, areaTypesSchema,
    destinationCountriesModel, destinationCountriesSchema,
    currenciesModel, currenciesSchema,
    currencyRatesModel, currencyRatesSchema,
    touristCountriesModel, touristCountriesSchema
} = require('./configuration-data')

const {
    bookingsModel, bookingsSchema,
    experiencesModel, experiencesSchema,
    flightFaresModel, flightFaresSchema,
    hotelsModel, hotelsSchema,
    medicalInsuranceModel, medicaclInsuranceSchema,
    placesModel, placesSchema,
    simCardsModel, simCardsSchema,
    tourGuidesModel, tourGuidesSchema,
    toursModel, toursSchema,
    visaRequirementsModel, visaRequirementsSchema,
     usersForDataSchema
} = require('./access-data')

const { blogDataModel, blogDataSchema} = require('./blog-data.model');
const { allImagesModel, allImagesSchema } = require('./all-images.model');

module.exports = {
    usersModel,
    // config-data 
    countriesModel,countriesSchema,
    provincesModel, provincesSchema,
    citiesModel, citiesSchema,
    areaTypesModel, areaTypesSchema,
    destinationCountriesModel, destinationCountriesSchema,
    placesModel, placesSchema,
    experiencesModel, experiencesSchema,
    touristCountriesModel, touristCountriesSchema,

    // access-data
    bookingsModel, bookingsSchema,
    flightFaresModel, flightFaresSchema,
    hotelsModel, hotelsSchema,
     usersForDataSchema,
    medicalInsuranceModel, medicaclInsuranceSchema,
    simCardsModel, simCardsSchema,
    tourGuidesModel, tourGuidesSchema,
    visaRequirementsModel, visaRequirementsSchema,
    toursModel, toursSchema,

    blogDataModel, blogDataSchema,
    allImagesModel, allImagesSchema,

    currenciesModel, currenciesSchema,
    currencyRatesModel, currencyRatesSchema
}