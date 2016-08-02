var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 'REPLACE-WITH-YOUR-MONGODB-URI';
    }
}
