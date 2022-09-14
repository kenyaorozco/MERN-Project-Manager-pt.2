// taking calls to our DB, using the models file the schema we created will need to connect to this to our routes that will connect to our DB
const Product =  require("../models/products.model")

// CREATE COMMANDS HERE !! 

module.exports.createProduct = (request,result) => {
    Product.create(request.body)
        .then(newProduct => result.json({newProduct: newProduct}))
        .catch(err => result.json({message:"OOPS something went wrong with our create  method", messageError : err}))
}

module.exports.findAll = (request,result) => {
    Product.find()
        .then(allProducts => {result.json(allProducts)})
        .catch(err => result.json({message:"OOPS something went wrong with our create Joke method", messageError : err}))
}

module.exports.deleteProduct = (request,result) => {
    Product.deleteOne({_id:request.params.id})
        .then(remove => result.json({remove:remove}))
        .catch(err => result.json({message:"OOPS something went wrong with our delete method", messageError : err}))
}

module.exports.findOneProduct = (request,result) =>{
    Product.findOne({_id: request.params.id})
        .then( oneProduct => result.json({product:oneProduct}))
        .catch(err => result.json({message:"OOPS something went wrong with our delete method", messageError : err}))
}

module.exports.updateProduct = (request,result) => {
    Product.findOneAndUpdate({_id:request.params.id},
        request.body,
        {new:true, runValidators:true})
    .then(updatedProduct => result.json(updatedProduct))
    .catch(err => result.json({message:"OOPS something went wrong with our delete method", messageError : err}))


}