const car = require('../models/Car')
const review = require('../models/Review')

const carController = {
    index: (req, res) => {
        car.find({}).populate('reviews').then((cars) => {
            res.send(cars)
        })
    },
    
    create: (req, res) => {
        car.create({
            image: req.body.image,
            name: req.body.name,
            year: req.body.year,
            speed: req.body.speed
        }).then(newcar => {
            res.send(newcar)
        })
    },
    delete: (req, res) => {
        car.findByIdAndRemove(req.params.id)
            .then(() => {
            res.sendStatus(200)
        })
    }
}

module.exports = carController