const express = require('express');
const router = express.Router();

// Dynamic date route
router.get('/:date', (req, res) => {
    let date = undefined
    let unix = undefined

    // Parse given date to date object
    if (isValidDate(req.params.date)){
        date = new Date(req.params.date)
        unix = dateToUnix(date)
    } else if (isValidUnixString(req.params.date)) {
        unix = parseInt(req.params.date)
        date = new Date(unix)
    } else {
        res.json({error : "Invalid Date"})
        return
    }

    res.json({unix: unix, utc: date.toUTCString()})
});

// Root route
router.get('/', (req, res) => {
    date = new Date()
    res.json({unix: dateToUnix(date), utc: date.toUTCString()})
})

// Functions
function dateToUnix(date) {
    return Math.floor(date.getTime())
}

function isValidDate(dateString) {
    return !isNaN(Date.parse(dateString))
}

function isValidUnixString(stamp) {
    if(isNaN(parseInt(stamp))) {
        return false
    }
    return true
}

module.exports = router