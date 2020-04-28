
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    // columns here
    name: { type: String, required: true, minlength: 2, maxlength: 150 },    
    description: { type: String, required: true, minlength: 2 },
    image: { type: String, required: false },
    link_url: { type: String, required: true, unique: true },

    city_id: { type: Schema.Types.ObjectId, required: true, ref: 'Cities' },
    province_id: { type: Schema.Types.ObjectId, ref: 'Provinces' },
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    areatype_id: { type: Schema.Types.ObjectId, required: true, ref: 'AreaTypes'},
    priority: { type: Number, default: 0 },
    
    featured: { type: Boolean, default: 'false' },
    custom_tags: [{ type: String }],
    tags: [{ type: String }],

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.experiencesModel = mongoose.model('Experiences', modelSchemaObj);
module.exports.experiencesSchema = modelSchema;
