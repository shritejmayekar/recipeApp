const express = require('express')
const router = express.Router()
router.get('/sigup',(req,res) => {

    console.log('hello')
    res.send('sigup')
})


module.exports = router
