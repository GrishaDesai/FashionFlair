const express = require('express')
const router = express.Router()

router.get('/DisplayData', (req, res) => {
    try {
        // console.log(global.Bags )
        res.send([global.Bags,global.Category])
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})


module.exports = router;