/* Declare connection information. This should be on a different file */
const options = {
    client: 'mysql2',
    connection: {
        host: 'us-cdbr-iron-east-05.cleardb.net',
        user: 'bbe17686954140',
        password: '6d70fabb',
        database: 'heroku_26653adf1a33d76'
    }
}

const knex = require('knex')(options)

module.exports = knex