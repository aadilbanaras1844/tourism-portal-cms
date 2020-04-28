const { citiesModel, citiesSchema } = require('./cities.model');
const { countriesModel, countriesSchema } = require('./countries.model');
const { provincesModel, provincesSchema } = require('./provinces.model');
const { areaTypesModel, areaTypesSchema } = require('./areatypes.model');
const { destinationCountriesModel, destinationCountriesSchema } = require('./destinationcountries.model');
const { currenciesModel, currenciesSchema } = require('./currencies.model');
const { currencyRatesModel, currencyRatesSchema } = require('./currency-rates.model');
const { touristCountriesModel, touristCountriesSchema } = require('./touristcountries.model')


module.exports = {
    citiesModel, citiesSchema,
    countriesModel, countriesSchema,
    provincesModel, provincesSchema,
    areaTypesModel, areaTypesSchema,
    destinationCountriesModel, destinationCountriesSchema,
    currenciesModel, currenciesSchema,
    currencyRatesModel, currencyRatesSchema,
    touristCountriesModel, touristCountriesSchema
}