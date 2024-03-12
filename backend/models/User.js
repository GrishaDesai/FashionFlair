const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cartitems: {
        type: [{
            category: {
                type: String
            },
            name: {
                type: String
            },
            company_name: {
                type: String
            },
            price: {
                type: Number,
                multipleOf: 0.01,
            },
            sale_price: {
                type: Number,
                multipleOf: 0.01,
            },
            image:{
                type:String
            }
        }]
    }
})

module.exports = mongoose.model('Useranddata', UserSchema)