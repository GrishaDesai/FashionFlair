const express = require('express')
const router = express.Router()

router.get('/GetCategory', (req, res) => {
    try {
        res.send([global.Category, global.testimonial])
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})


module.exports = router;