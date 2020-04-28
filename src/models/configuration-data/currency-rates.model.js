
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    // columns here
    from: { type: String, default : '' },
    to: { type: String, default : '' },
    value: { type: Number, default: 1 },

    created_by: { type: String, required: true },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.currencyRatesModel = mongoose.model('CurrencyRates', modelSchemaObj);
module.exports.currencyRatesSchema = modelSchema;
