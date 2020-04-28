

const placesRouter = require('./places.router');
const experiencesRouter = require('./experiences.router');
const bookingsRouter = require('./bookings.router');
const flightFaresRouter = require('./flighth-fares.router');
const medicalInsurancceRouter = require('./medical-insurance.router');
const simCardsRouter = require('./sim-cards.router');
const tourguidesRouter = require('./tour-guides.router');
const visaRequirementsRouter = require('./visa-requirements.router');
const toursRouter = require('./tours.router');
const hotelsRouter = require('./hotels.router');
const usersForDataRouter = require('./users-fordata.router');

module.exports = function(app){
    // access-data apis
    app.use('/api/experiences', experiencesRouter);
    app.use('/api/places', placesRouter);
    app.use('/api/bookings', bookingsRouter);
    app.use('/api/flight-fares', flightFaresRouter);
    app.use('/api/medical-insurance', medicalInsurancceRouter);
    app.use('/api/sim-cards', simCardsRouter);
    app.use('/api/tour-guides', tourguidesRouter);
    app.use('/api/visa-requirements', visaRequirementsRouter);
    app.use('/api/hotels', hotelsRouter);
    app.use('/api/users-data', usersForDataRouter);
    app.use('/api/tours', toursRouter);
}