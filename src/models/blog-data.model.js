
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    // columns here
    rec_id: { type: Schema.Types.ObjectId, required: true },
    text1: { type: String, default : '' },
    text2: { type: String, default : '' },
    section_type: {type: String, required: true},
    sequence: {type: Number, required: true},


    // created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.blogDataModel = mongoose.model('BlogData', modelSchemaObj);
module.exports.blogDataSchema = modelSchema;
