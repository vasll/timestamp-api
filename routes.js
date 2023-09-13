const express = require('express');
const router = express.Router();

// Root route
router.get('/:date', (req, res) => {
    let date = undefined

    // Parse date to INT if it's an UNIX timestamp, otherwise parse a Date object from it
    const unixTimestamp = parseInt(req.params.date)
    if (isNaN(unixTimestamp)) {
        date = new Date(req.params.date)
    }
    date = new Date(unixTimestamp)

    res.json({unix: dateToUnix(date), utc: date.toUTCString()})
});

// Functions
function dateToUnix(date) {
    return Math.floor(date.getTime())
}

module.exports = router;