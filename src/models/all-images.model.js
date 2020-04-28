
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    // columns here
    rec_id: { type: Schema.Types.ObjectId, required: true },
    image: { type: String, default : '' },
    image_type: { type: String, default : '' },
    sequence: { type: Number, default:0 },


    // created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const modelSchemaObj = new Schema(modelSchema);

module.exports.allImagesModel = mongoose.model('AllImages', modelSchemaObj);
module.exports.allImagesSchema = modelSchema;
