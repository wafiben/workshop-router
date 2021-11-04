const SingleProduct = ( props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={props.product.image}  alt="Card image cap" /> 
      <div class="card-body">
        <h5 class="card-title">{props.product.name}</h5>
        <p class="card-text">{props.product.price} $</p>
      </div>  
     
    </div>
  );
};
export default SingleProduct;
