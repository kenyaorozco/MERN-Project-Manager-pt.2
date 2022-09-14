// import controller to use the model that were created
const ProductManager = require("../controllers/products.controller")
const Product = require("../models/products.model")

// Controller is calling the WHOLE THING and the 2nd param will envoke a certain function
module.exports = (app) => {
    // Create Product
    app.post("/api/newProduct",ProductManager.createProduct)
    // Display all Products
    app.get("/api/products",ProductManager.findAll)
    // Delete product by ID
    app.delete("/api/product/delete/:id",ProductManager.deleteProduct)
    // Get one product by ID
    app.get("/api/product/:id",ProductManager.findOneProduct)
    // Update a product by a certain ID
    app.put("/api/update/product/:id",ProductManager.updateProduct)
}