
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelSchema = {
    first_name: { type: String, required: "What is Your First Name?" },
    last_name: { type: String, required: "What is Your Last Name?" },
    contact_number1: { type: String },
    contact_number2: { type: String },
    email: { type: String, required: "What is Your Email?", unique: true },
    password: {
        type: String,
        required: 'What is your password'
    },
    image_dp: { type: String },
    images: { type: [String] },
    
    is_traveller: { type: Boolean, default: true },
    is_organiser: { type: Boolean, default: false },
    is_manager: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    is_super_admin: { type: Boolean, default: false },
    
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date },
    updated_at: { type: Date, default: new Date }
};

// const modelSchemaObj = new Schema(modelSchema);

// module.exports.usersForDataModel = mongoose.model('Users', modelSchemaObj);
module.exports.usersForDataSchema = modelSchema;
