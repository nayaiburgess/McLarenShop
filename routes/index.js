const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const reviewController = require('../controllers/reviewController')



router.get('api/reviews', reviewController.index)// all reviews
router.post('api/reviews', reviewController.create) // posting to list of reviews
router.patch('api/reviews/:id', reviewController.update) // updates the specific review 
router.delete('api/reviews/:id', reviewController.delete) // deletes review 

router.get('api/shop', carController.index) // all cars
router.post('api/shop', carController.create) // post to list of cars
router.delete('api/shop/:id ', carController.delete) // delete/purchase car