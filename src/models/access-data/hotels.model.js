
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {

    name: { type: String, required: true, minlength: 2, maxlength: 30 },
    address: { type: String, required: true, minlength: 2, maxlength: 100 },
    website: { type: String, minlength: 2, maxlength: 200 },
    link_url: { type: String, required: true, unique: true  },

    city_id: { type: Schema.Types.ObjectId, required: true, ref: 'Cities' },
    province_id: { type: Schema.Types.ObjectId, ref: 'Provinces' },
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    
    featured: { type: Boolean, default: 'false' },
    custom_tags: [{ type: String }],
    tags: [{ type: String }],

    contact_number1: { type: String, required: true, minlength: 2, maxlength: 30 },
    contact_number2: { type: String, required: false },
    contact_email1: { type: String, required: false, minlength: 0, maxlength: 30 },
    contact_email2: { type: String, required: false, minlength: 0, maxlength: 30 },
    hotel_type: { type: String, enum : ['all','family', 'couple', 'boys', 'girls']},
    hotel_category: { type: String, enum : ['5','4', '3']},

    image: { type: String },
    // images: [{ type: String }],

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date },

};

const modelSchemaObj = new Schema(modelSchema);

module.exports.hotelsModel = mongoose.model('Hotels', modelSchemaObj);
module.exports.hotelsSchema = modelSchema;
