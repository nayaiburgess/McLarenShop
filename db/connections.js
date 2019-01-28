const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/MclarenShop").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;