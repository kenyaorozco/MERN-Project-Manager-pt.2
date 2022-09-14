import './App.css';
import {useState,useEffect} from 'react'
import {Link, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import DisplayProducts from './components/DisplayProducts';
import axios from 'axios';
import OneProduct from './components/OneProduct';
import EditOne from './components/EditOne';

function App() {
// Will be used to map out the products created using our form 
  const [allProducts,setAllProducts] = useState([])

  const [loaded,setLoaded] = useState([])

    useEffect(() => {
      axios.get("http://localhost:8000/api/products")
        .then( result =>{
          setAllProducts (result.data);
          setLoaded(true)
        })
        .catch( err => console.log("whoops error in the App.js",err))
    },[allProducts])
    
    
    return (
      <div className="App">
        <h1>Product Manager:</h1>
          <Link to={"/form"}><button>Form</button></Link> 
          <Link to={"/product/"}><button>All Products</button></Link>


      <Routes >
        {/* Display's all products */}
        <Route path="/product/" element={loaded &&
        <DisplayProducts  
        allProducts={allProducts}/>} />
        {/* Creates form */}
        <Route element={<Form />} path="/form" />
        {/* Updates our product */}
        <Route element={<EditOne />} path = "/edit/:id"/>
        {/* Displays one Product */}
        <Route element={<OneProduct/>} path="/product/:id" />
      </Routes> 

    </div>
  );
}

export default App;
