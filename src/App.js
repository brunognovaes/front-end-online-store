import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/product-details/:category/:id"
            component={ ProductDetails }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/" component={ Home } />
        </Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
