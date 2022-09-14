import React from 'react'
import {Link} from 'react-router-dom'

const DisplayProducts = (props) => {


  return (
    <div>
        <h2>All Products: </h2>
          {props.allProducts.map( (product) => 
            <Link to={"/product/"+ product._id} key={product._id}>
            <p key={product._id}> {product.title}</p></Link>
            )}
      
    </div>

  )
}

export default DisplayProducts