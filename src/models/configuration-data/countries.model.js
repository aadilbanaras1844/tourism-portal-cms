
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    short_name: { type: String, required: true, minlength: 2, maxlength: 10 },
    country_code: { type: String, required: true, minlength: 2, maxlength: 30 },
    currency: { type: String, required: true },
    continent: { type: String, required: true, minlength: 2, maxlength: 30 },
    flag: { type: String },

    link_url: { type: String, required: true, unique: true  },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const CountriesSchema = new Schema(modelSchema);

module.exports.countriesModel = mongoose.model('Countries', CountriesSchema);
module.exports.countriesSchema = modelSchema;
