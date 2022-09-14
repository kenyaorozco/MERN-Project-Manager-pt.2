const express = require ('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const DB = "ProductManager";

//--- MIDDLEWARE ---
app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));

// ---USE TO CONNECT DB TO OUR CONFIG --
require("./config/mongoose.config")(DB)

// connect to DB FIRst THEN connect to the routes 
require("./routes/products.route")(app)
//  the APP invokes our function on our ROUTE controller


// ---Starts the server---
app.listen(PORT,() => {console.log(`Server up on  ${PORT}`)}) 