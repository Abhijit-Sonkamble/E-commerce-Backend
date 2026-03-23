const mongoose = require("mongoose");

const adminSchema = mongoose.Schema ({

    name: {
        type : String,
        required : true
    },
     last_name: {
        type : String,
        required : true
    },
     email: {
        type : String,
        required : true,
        unique : true // unique personality dete agar same asale tr error kinva notifacation deil
    },
     password: {
        type : String,
        required : true
    },
    OTP : {
        type : Number,
        default : 0
    },
    OTP_Expire : {
        type : Date,
        default : null
    },
    isActive : { // Admin active hai ki nhi dikhayega
        type: String,
        default: true
    },
    isDelete : { // Admin la soft delete karala ithe true false dakhvel
        type: String,
        default: false
    },
    create_at : { // Admin kevha banla tyacha data milel
        type: String,
        required: true
    },
    update_at : { // Admin chya data madhe kadhi changes zale
        type: String,
        required: true
    },

});

module.exports = mongoose.model("Admin", adminSchema, "Admin")