const { bookingsModel, bookingsSchema } = require('./bookings.model');
const { experiencesModel, experiencesSchema } = require('./experiences.model');
const { flightFaresModel, flightFaresSchema } = require('./flight-fares.model');
const { hotelsModel, hotelsSchema } = require('./hotels.model');
const { medicalInsuranceModel, medicaclInsuranceSchema } = require('./medical-insurance.model');
const { placesModel, placesSchema } = require('./places.model');
const { simCardsModel, simCardsSchema } = require('./sim-cards.model');
const { tourGuidesModel, tourGuidesSchema } = require('./tour-guides.model');
const { toursModel, toursSchema } = require('./tours.model');
const { visaRequirementsModel, visaRequirementsSchema } = require('./visa-requirements.model');
const {  usersForDataSchema } = require('./users-fordata.model')
module.exports = {
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
}