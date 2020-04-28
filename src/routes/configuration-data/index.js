const countriesRouter = require('./countries.router');
const provincesRouter = require('./provinces.router');
const citiesRouter = require('./cities.router');
const areaTypesRouter = require('./areatype.router');
const destinationCountriesRouter = require('./destinationcountries.router');
const touristCountriesRouter = require('./touristcountries.router');
const currenciesRouter = require('./currencies.router');
const currencyRatesRouter = require('./currency-rates.router');


module.exports = function(app){
    
    // config-data apis
    app.use('/api/countries', countriesRouter);
    app.use('/api/provinces', provincesRouter);
    app.use('/api/cities', citiesRouter);
    app.use('/api/area-types', areaTypesRouter);
    app.use('/api/destination-countries', destinationCountriesRouter);
    app.use('/api/tourist-countries', touristCountriesRouter);
    app.use('/api/currencies', currenciesRouter);
    app.use('/api/currency-rates', currencyRatesRouter);
    
}