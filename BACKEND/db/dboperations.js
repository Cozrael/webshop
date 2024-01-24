var config = require('./dbconfig');
const mysql = require('mysql');

let pool = mysql.createPool(config);

//Összes adat. (GET http://localhost/termekek)
async function selectTermekek() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM termekek', (error, elements) => {
            if (error) {
                return reject(error);
            }
            resolve(elements);
        });
    });
};

module.exports = {
    selectTermekek: selectTermekek,
}