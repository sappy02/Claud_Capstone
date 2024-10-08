const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        },
    description:{
        type: String,
        required: true,
        },
    bedrooms:{
        type: Number,
        required: true,
        },
    bathrooms:{
        type: Number,
        required: true,
        },
    city:{
        type: String,
        required: true,
       },
    state:{
        type: Number,
        required: true,
        },

});

module.exports = mongoose.model('Property', PropertySchema, 'sampleairbnb');