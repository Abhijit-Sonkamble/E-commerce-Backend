const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({

    category_name : String,
    category_image : String,
    isActive : {
        type: String,
        default : true
    },
    isDelete: {
        type: String,
        default: false
    },
    create_at : {
        type: String,
        required: true
    },
    update_at : {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Category", categorySchema, "Category")