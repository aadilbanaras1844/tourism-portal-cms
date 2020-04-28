
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    // columns here
    name: { type: String, default : '', required: true },
    code: { type: String, default : '', required: true },


    created_by: { type: String, required: true },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.currenciesModel = mongoose.model('Currencies', modelSchemaObj);
module.exports.currenciesSchema = modelSchema;
