import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
const Products = (props) => {
  console.log(props.products)
  return (
    
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      {props.products.map((product) => (
     <Link to={`/Products/${product.id}`}>  <SingleProduct key={product.id} product={product} /></Link> 
      ))}
      
    </div> 
  );
};
export default Products;
