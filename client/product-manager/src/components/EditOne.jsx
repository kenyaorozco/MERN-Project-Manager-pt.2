import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom'


const EditOne = (props) => {

    const navigate = useNavigate();
// Deconstruct the param that was used on our link on the App.js
    const {id} = useParams();

// Reuse the Vars that were created when we created our form
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")




    useEffect(() => { 
            axios.get("http://localhost:8000/api/product/" +id)
            .then(result => {
                // console.log(result.data.product);
                setTitle (result.data.product.title );
                setPrice (result.data.product.price );
                setDescription (result.data.product.description)
            })
            // the data was returning an an obj had to call the obj to get the data alone
            .catch(error => console.log(error))
        },[id])

        const updateProduct = (e) => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/update/product/" +id,{
                title,
                price,
                description
            })
            .then(res => {navigate("/product/")})
            .catch(error => console.log(error))
        }

    return (
    <div>
        <h2>Edit Page</h2>
        <form onSubmit={updateProduct}>
            Product Title: <input onChange={(e) => setTitle(e.target.value)} value={title}/> <br />
            Price: <input onChange={(e) => setPrice(e.target.value)} value={price}/> <br />
            Description: <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/> <br />
            <button >Update</button> <br />
        </form>
    </div>
    )
}

export default EditOne