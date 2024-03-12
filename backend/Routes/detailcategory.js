const express = require('express')
const router = express.Router()
const categoryschema = require("../models/Category")

// const detcat = mongoose.model('detcat', {}, global.Category)
router.get('/detailcategory/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const onecat = await categoryschema.findById(id);
        res.send([onecat, global.Bags])

    } catch (error) {
        console.error(error.message)
        res.send({err:error})
    }
})


module.exports = router;