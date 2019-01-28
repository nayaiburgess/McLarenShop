const cars = require('../models/Car')

cars.deleteMany({})
    .then(() => {
        const car1 = cars.create({
            image:"https://www.cstatic-images.com/car-pictures/xl/usc70mlc051a021001.png",
            name: "McLaren 570S",
            year: "2015",
            speed: "328kph(204mph)"
        })
        const car2 = cars.create({
            image: 'http://www.moibbk.com/images/mclaren-mp412c-spider-red.jpg',
            name:"12C Spider",
            year: "2012-2014",
            speed: "329kph(204mph)"
        })
        const car3 = cars.create({
            image:"http://www.preowned.mclaren.com/photo/2018-mclaren-570S-Spider-Milano-SBM13FAB1JW004465-350-6.jpg",
            name: "McLaren 675LT",
            year: "2015",
            speed: "330kph(205mph)"
        })
        const car4 = cars.create({
            image:"https://images-na.ssl-images-amazon.com/images/I/41HGKczHbDL._SX466_.jpg",
            name:"McLaren P1",
            year:"2015",
            speed:"349kph(217mph)"
        })
        
        
        .then((cars) => {
            Promise.all([car1, car2, car3, car4]).then(() => {
                cars.save()
                console.log('successfully seeded')
            })
        })
})