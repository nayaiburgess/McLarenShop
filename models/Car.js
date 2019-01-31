const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Car = new Schema({
    image: String,
    name: String,
    year: String,
    speed: String,
    reviews: [{
     type: Schema.Types.ObjectId,
     ref: "Review" 
    }]
})
module.exports = mongoose.model("Car", Car)