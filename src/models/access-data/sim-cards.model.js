
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    sim_number: { type: String, required: true, minlength: 2, maxlength: 30 },
    description:  { type: String, required: true },
    valid_till:  { type: String, required: true, minlength: 2, maxlength: 30 },
    is_free:  { type: Boolean, required: true, minlength: 2, maxlength: 30 },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.simCardsModel = mongoose.model('SimCards', modelSchemaObj);
module.exports.simCardsSchema = modelSchema;
