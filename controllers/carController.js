const car = require('../models/Car')

const carController = {
    index: (req, res) => {
        car.find({}).then((car) => {
        })
    },
    new: (req, res) => {
        
    },
    create: (req, res) => {
        car.create({
            image: req.body.image,
            name: req.body.name,
            year: req.body.year,
            speed: req.body.speed
        }).then(car => {
            
        })
    },
    show: (req, res) => {
        const carId = req.params.id
        car.findById(carId).then((car) => {
        })
      },
    delete: (req, res) => {
        const carId = req.params.id
        car.findByIdAndRemove(carId).then(() => {
        })
    }
}

module.exports = carController