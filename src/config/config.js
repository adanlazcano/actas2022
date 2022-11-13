const dotenv =require('dotenv');
dotenv.config();

// Config collection used for port & DB config
 const environment = {

    port: process.env.PORT,
    db_url: process.env.DB_URL
}

module.exports = {environment}