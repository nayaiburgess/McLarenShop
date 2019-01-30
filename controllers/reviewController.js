const reviews = require('../models/Review')

const reviewController = {
    indexModels: (req, res) => {
        reviews.find({}).then((reviewsRes) => {  
        })
    },
    
    indexAgencies: (req, res) => {
        reviews.find({}).then((reviewsRes) => {
        })
    },
    new: (req, res) => {
    },

    create: (req, res) => {
        reviews.create({
            username: req.body.username,
            comments: req.body.comments
        }).then(review => {
        })
    },

    review: (req, res) => {
        const reviewId = req.params.id
        reviews.findById(reviewId).then((review) => {
        })
      },

    edit: (req, res) => {
        const reviewId = req.params.id
    },

    update: (req, res) => {
        const reviewId = req.params.id
        reviews.findByIdAndUpdate(reviewId, req.body, {new: true}).then((review) => {
            
        })
    },

    delete: (req, res) => {
        const reviewId = req.params.id
        reviews.findByIdAndRemove(reviewId).then(() => {
        })
    }
}

module.exports = reviewController