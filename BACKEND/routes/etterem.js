var express = require('express');
var router = express.Router();
var Db = require('../db/dboperations');

//Összes adat. (GET http://localhost/etterem)
router.get('/', (req,res) => {
    Db.selectEtterem()
    .then((adat) => {
        res.json(adat);
    })
    .catch(
        (error) => {res.send (error)}
    )
});

module.exports = router;