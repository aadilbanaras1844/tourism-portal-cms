
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    
    name: { type: String, required: true, minlength: 2, maxlength: 100 },
    short_name: { type: String, maxlength: 10},
    country_id: { type: Schema.Types.ObjectId, required: true, ref: 'Countries' },
    link_url: { type: String, required: true, unique: true  },
    created_by: { type: String, required: true, minlength: 2, maxlength: 30 },
    
    is_active: { type: Boolean,default: true },
    is_deleted: { type: Boolean,default: false },
    
    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
};

const ModelSchema = new Schema(modelSchema);

module.exports.provincesModel = mongoose.model('Provinces', ModelSchema);
module.exports.provincesSchema = modelSchema;
