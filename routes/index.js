const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const reviewController = require('../controllers/reviewController')

router.get('/api/shop', carController.index) // all cars
// router.post('/api/shop', carController.create) // post to list of cars
// router.delete('/api/shop/:id ', carController.delete) // delete/purchase car

// router.post('/api/shop/:id/reviews', reviewController.create) // posting to list of reviews
// router.patch('/api/shop/:id/reviews/:id', reviewController.update) // updates the specific review 
// router.delete('/api/shop/:id/reviews/:id', reviewController.delete) // deletes review 



module.exports = router