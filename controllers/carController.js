const car = require('../models/Car')

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
    show: (req, res) => {
        const carId = req.params.id
        car.findById(carId).then((car) => {
            res.send(car)
        })
      },
    delete: (req, res) => {
        const carId = req.params.id
        car.findByIdAndRemove(carId).then(() => {
            res.sendStatus(200)
        })
    }
}

module.exports = carController