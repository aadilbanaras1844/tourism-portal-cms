
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    headline:  { type: String, required: true, minlength: 2, maxlength: 200 },
    priority:  { type: Number, required: true, default: 0 },
    charges_arr:  { type: Schema.Types.Mixed, required: true },
    currency:  { type: String, required: true },
    link_url: { type: String, required: true, unique: true },
    description:  { type: String },
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    image: { type: String, required: false },

    areatypes: [{ type: Schema.Types.Mixed, required: true }],
    cities: [{ type: Schema.Types.Mixed, required: true }],
    places: [{ type: Schema.Types.ObjectId, required: true, ref: 'Places' }],
    
    featured: { type: Boolean, default: 'false' },
    custom_tags: [{ type: String }],
    tags: [{ type: String }],

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active:  { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date },
    updated_at: { type: Date, default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

modelSchemaObj.index({ tags: 'text', custom_tags: 'text' });

module.exports.toursModel = mongoose.model('Tours', modelSchemaObj);
module.exports.toursSchema = modelSchema;
