// const reviews = require('../models/Review')
// const car = require('../models/Car')

// const reviewController = {
  
//     create: (req, res) => {
//         const carId = req.params.id 

//         car.findById(carId).then(
//             (car) =>{
//                 reviews.create({
//                     username: req.body.username,
//                     comments: req.body.comments
//                 }).then(newreview => {
//                     car.reviews.push(newreview)
//                     car.save()
//                     res.send(newreview)
//                 })
//             }
//         )
        
//     },

//     update: (req, res) => {
//         const reviewId = req.params.id
//         reviews.findByIdAndUpdate(reviewId, req.body, {new: true}).then((review) => {
//           res.send(review)  
//         })
//     },

//     delete: (req, res) => {
//         const reviewId = req.params.id
//         reviews.findByIdAndRemove(reviewId).then(() => {
//             res.sendStatus(200)
//         })
//     }
// }

// module.exports = reviewController