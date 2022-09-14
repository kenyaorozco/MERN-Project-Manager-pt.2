// THIS IS WHERE WE WILL IMPORT MONGOOSE
const mongoose = require("mongoose");

module.exports = (DB) => {

    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connected to  ${DB}`))
        .catch(err => console.log('not connected to Db', err))
}