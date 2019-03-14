const caminte = require('caminte'),
Schema = caminte.Schema,
 config = {
         driver     : "mongodb",
         host       : "localhost",
         port       : "27017",
         database   : "students",
         pool       : true
};

var schema = new Schema(config.driver, config);

module.exports = {
    schema
}

