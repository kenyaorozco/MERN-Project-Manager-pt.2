import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import EditOne from './EditOne'

const OneProduct = () => {
// Navigate to a different 
    const navigate = useNavigate();
// create new const that will act as the accessing part in our function that will be able to pull data from our db
    const [product,setProduct] = useState([])

    const {id} = useParams();

    useEffect(() => { console.log(id)
    axios.get("http://localhost:8000/api/product/" +id)
        .then(result => setProduct(result.data.product) )
        // the data was returning an an obj had to call the obj to get the data alone
        .catch(error => console.log(error))
    },[id])

    const goToUpdate = (product) =>{
        navigate("/edit/" + product)
    }


    const deleteProduct = (product) => {
        if (window.confirm("Are you sure you want to delete this?")){

            axios.delete("http://localhost:8000/api/product/delete/"+ product)
            .then(result => (result.data.product))
            .catch(error => console.log(error))
            navigate("/product/" )
        }
    }

    return (
        <div>
            Title: {product.title} <br />
            Price: $ {product.price} <br />
            Description: {product.description} <br />
            <button onClick={() => goToUpdate(product._id)}>Edit</button>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default OneProduct