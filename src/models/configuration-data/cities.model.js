
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    short_name: { type: String },
    
    province_id: { type: Schema.Types.ObjectId, ref: 'Provinces' },
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    link_url: { type: String, required: true, unique: true  },

    priority: { type: Schema.Types.Number, default: 0 },
    icon: { type: String },
    featured: { type: Boolean, default: 'false' },
    custom_tags: [{ type: String }],
    tags: [{ type: String }],
    description: { type: String, required: true },

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.citiesModel = mongoose.model('Cities', modelSchemaObj);
module.exports.citiesSchema = modelSchema;
