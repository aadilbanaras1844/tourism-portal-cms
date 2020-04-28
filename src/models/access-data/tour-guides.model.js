
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    name: { type: String, required: true, minlength: 2, maxlength: 30 },
    address: { type: String, required: true, minlength: 2, maxlength: 100 },    
    
    city_id: { type: Schema.Types.ObjectId, required: true, ref: 'Cities' },
    province_id: { type: Schema.Types.ObjectId, ref: 'Provinces' },
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    
    contact_number: { type: String, required: true, minlength: 2, maxlength: 30 },
    contact_email: { type: String, required: false, minlength: 0, maxlength: 30 },
    image: { type: String, required: false },

    service_provinces: [{ type: Schema.Types.ObjectId, required: true, ref: 'Provinces' }],
    service_cities: [{ type: Schema.Types.ObjectId, required: true, ref: 'Cities' }],

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.tourGuidesModel = mongoose.model('TourGuides', modelSchemaObj);
module.exports.tourGuidesSchema = modelSchema;
