var express = require('express');
var router = express.Router();
var mongooseDb = require("mongoose");
var seatSchema = {
    number: Number,
    row: Number,
    column: Number,
    status: String
};

var Seats = mongooseDb.model("Seats", seatSchema, "Seats");

//get all the seats present in the database and return the array.
router.get('/', function(req, res) {
    Seats.find({}, function(error, docs) {
        if (error) {
            res.status(500);
            res.json({
                "data": []
            })
        } else {
            res.status(200);
            res.json({
                "data": docs
            })
        }
    })
});


//Reset all the seats back to available status -- For testing

router.put('/resetSeats', function(req, res) {
    Seats.updateMany({ status: "booked" }, { status: "available" }, function(err, docs) {

        res.json(docs);

    })
})

//return the seat count of available seats from the database.
router.get('/seatCount', function(req, res, next) {

    Seats.countDocuments({ status: "available" }, function(error, count) {
        if (error) {
            console.log("Cannot Count");
            res.json({
                "count": -1
            });
            res.status(500);
        } else {

            res.json({
                "count": count,

            })
            res.status(200);
        }
    })
});

// server method to book seats with numbers inside the array.
router.put('/bookSeats', function(req, res, next) {
    let seatsAllocated = req.body.seatsAllocated;
    console.log(seatsAllocated)
    Seats.update({ number: { "$in": seatsAllocated } }, { status: "booked" }, { "multi": true }).then((seat) => {
        res.status(200);
        res.json({
            "data": seat
        })
    })
})

module.exports = router;