import "./App.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import Details from "./Components/details";
function App() {
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg",
    },
  ];
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light"  style={{height:'300px'}}>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-item nav-link active">
                Home <span class="sr-only">(current)</span>
              </Link >
              <Link to="/Login" class="nav-item nav-link">Login</Link>
              <Link to="/Products" class="nav-item nav-link">Products</Link>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home}></Route>
        <Route exatc path="/Login" component={Login}></Route>
        <Route  exact path="/Products" render={(props)=><Products {...props} products={products}   />}></Route>
        <Route  exact path="/Products/:id" render={(props)=><Details {...props} products={products}   />}></Route>
      </Router>
    </div>
  );
}
export default App;
