
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {

    country_from: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    city_from: { type: Schema.Types.ObjectId, required: true, ref: 'Cities' },
    country_to: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    city_to: { type: Schema.Types.ObjectId, required: true, ref: 'Cities' },

    
    fare:  { type: String, required: true, minlength: 2, maxlength: 30 },
    currency:  { type: String, required: true, minlength: 2, maxlength: 30 },
    flight_type: { type: String, enum : [ 'oneway','round' ]},
    flight_class: { type: String, enum : [ 'economy','first', 'buisness' ]},

    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.flightFaresModel = mongoose.model('FlightFares', modelSchemaObj);
module.exports.flightFaresSchema = modelSchema;
