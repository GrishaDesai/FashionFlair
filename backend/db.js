const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/FashionFlair'

const mongoDB = ()=>{
    mongoose.connect(mongoURI, () => {
        console.log('connected successfully')
    })
}

module.exports = mongoDB;