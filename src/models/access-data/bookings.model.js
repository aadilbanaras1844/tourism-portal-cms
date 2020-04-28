
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
// columns here

created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
is_active: { type: Boolean,default: true },
is_deleted: { type: Boolean,default: false },
created_at: { type: Date,default: new Date },
updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.bookingsModel = mongoose.model('Bookings', modelSchemaObj);
module.exports.bookingsSchema = modelSchema;
