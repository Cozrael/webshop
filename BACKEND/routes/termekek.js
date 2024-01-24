var express = require('express');
var router = express.Router();
var Db = require('../db/dboperations');

//Összes adat. (GET http://localhost/termekek)
router.get('/', (req,res) => {
    Db.selectTermekek()
    .then((adat) => {
        res.json(adat);
    })
    .catch(
        (error) => {res.send (error)}
    )
});

module.exports = router;