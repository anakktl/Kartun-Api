__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ true: "Silahkan baca dokumentasi di carik sendiri ae bg" })
})


module.exports = router
