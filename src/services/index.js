

const userService = require('./user.service');

const {
    countriesService,
    provincesService,
    citiesService,
    areaTypesService,
    destinationCountriesService,
    touristCountriesService,
    currenciesService,
    currencyRatesService
} = require('./configuration-data');

const {
    placesService,
    experiencesService,
    bookingsService,
    flightFaresService,
    hotelsService,
    usersForDataService,
    medicalInsuranceService,
    simCardsService,
    tourGuidesService,
    visaRequirementsService,
    toursService
} = require('./access-data')


const blogDataService = require('./blog-data.service');
const allImagesService = require('./all-images.sevice');


module.exports = {
    
    userService,

    countriesService,
    provincesService,
    citiesService,
    areaTypesService,
    destinationCountriesService,
    touristCountriesService,
    currenciesService,
    currencyRatesService,

    bookingsService,
    flightFaresService,
    hotelsService,
    usersForDataService,
    medicalInsuranceService,
    simCardsService,
    tourGuidesService,
    visaRequirementsService,
    toursService,
    placesService,
    experiencesService,
    
    blogDataService,
    allImagesService,


}