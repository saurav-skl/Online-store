import React from 'react';
import { Switch, Route } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Default from "./Components/Default";
import Cart from "./Components/Cart/Cart";
import Product from './Components/Product';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import  Modal  from './Components/Modal';


function App() {
  return (
    <React.Fragment>
     <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Details" component={Details} />
        <Route exact path="/Product" component={Product} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;


// 