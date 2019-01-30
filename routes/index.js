const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const reviewController = require('../controllers/reviewController')
const landingController = require('../controllers/landingController')

router.get('/', landingController.index)

router.get('/reviews', reviewController.index)// all reviews
router.get('/reviews/new', reviewController.new) // form to new review
router.post('/reviews', reviewController.create) // posting to list of reviews
router.get('/reviews/:id', reviewController.review) //review specifc review
router.get('/reviews/:id/edit', reviewController.edit) // edit the review
router.patch('/reviews/:id', reviewController.update) // updates the specific review 
router.delete('/reviews/:id', reviewController.delete) // deletes review 

router.get('/shopMclaren', carController.index) // all cars
router.get('/shopMclaren/new', carController.new) // form to new car
router.post('/shopMclaren', carController.create) // post to list of cars
router.get('/shopMclaren/:id', carController.review) // view specific car
router.delete('/shopMclaren/:id ', carController.delete) // delete/purchase car