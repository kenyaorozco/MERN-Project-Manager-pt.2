// Import mongoose with our DB w/ mongo
const mongoose = require('mongoose');

// create a schema - this will connect to the DB 
const ProductManagerSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true,"Please add a {PATH}"],
        minlength: [3, "{PATH} name must be at least 5 char long"]

    },
    price : {
        type: Number,
        min: [1,"Item must cost more than $1"]
    },
    description:{
        type: String,
        required:[true,"Must have a {PATH}"]
    },
}, {timestamps:true})

// Create const to connect to our DB therefore we can input data into our DB
const Product = mongoose.model("ProductManager",ProductManagerSchema)

// export the module, access it in our server.js
module.exports = Product;