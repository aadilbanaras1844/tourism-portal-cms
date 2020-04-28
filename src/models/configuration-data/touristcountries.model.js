
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    // columns here
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.touristCountriesModel = mongoose.model('TouristCountriesCcountries', modelSchemaObj);
module.exports.touristCountriesSchema = modelSchema;
