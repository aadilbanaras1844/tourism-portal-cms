
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    

    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    insurance_type: { type: String, required: true, minlength: 2, maxlength: 100 },
    description:  { type: String, required: true, minlength: 2 },
    charges:  { type: Number, required: true },
    currency:  { type: String, required: true },
    max_limit:  { type: Number, required: true },
    days:  { type: Number, required: true },
    percentage_to_pay:  { type: Number, required: true },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active:  { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.medicalInsuranceModel = mongoose.model('MedicalInsurance', modelSchemaObj);
module.exports.medicaclInsuranceSchema = modelSchema;
