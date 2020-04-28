
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    country_from: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    country_to: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },

    visa_required: { type: Boolean, required: true, default: false },
    description:  { type: String, required: true },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.visaRequirementsModel = mongoose.model('VisaRequirements', modelSchemaObj);
module.exports.visaRequirementsSchema = modelSchema;
