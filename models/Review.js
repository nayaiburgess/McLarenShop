const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Review = new Schema({
    username: String,
    comments: String,
})
module.exports = mongoose.model("Review", Review)