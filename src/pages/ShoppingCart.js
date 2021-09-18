/*

Página => ShoppingCart

Requisito(s) correspondente(s) => 3

Descrição => Página do carrinho de compras com a mensagem "Seu carrinho está vazio".

Observações => atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../components/ShoppingCartItem';
import Button from '../components/Button';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
      className: 'cart-section',
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.handleClassName = this.handleClassName.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
    setTimeout(() => {
      this.handleClassName();
    }, 1);
  }

  componentDidUpdate() {
    const { saveProductLocalStorage } = this;
    saveProductLocalStorage();
  }

  componentWillUnmount() {
    clearTimeout(1);
  }

  handleRemove(index) {
    const { shoppingCart } = this.state;
    const newShoppingCart = [...shoppingCart];
    newShoppingCart.splice(index, 1);

    this.setState({
      shoppingCart: newShoppingCart,
    });
  }

  handleDecrease(index) {
    const { shoppingCart } = this.state;
    const newShoppingCart = [...shoppingCart];

    if (newShoppingCart[index].quantity > 0) {
      newShoppingCart[index].quantity -= 1;
      this.setState({
        shoppingCart: newShoppingCart,
      });
    }
  }

  handleIncrease(index) {
    const { shoppingCart } = this.state;
    const newShoppingCart = [...shoppingCart];
    newShoppingCart[index].quantity += 1;
    this.setState({
      shoppingCart: newShoppingCart,
    });
  }

  handleClassName() {
    this.setState({ className: 'cart-section cart-slide' });
  }

  getLocalStorage() {
    const getLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));

    this.setState({
      shoppingCart: getLocalStorage,
    });
  }

  saveProductLocalStorage() {
    const { shoppingCart } = this.state;

    localStorage.setItem('cartProducts', JSON.stringify(shoppingCart));
  }

  totalPrice() {
    const { shoppingCart } = this.state;
    const totalPriceCart = shoppingCart.reduce((acc, item) => {
      const { price, quantity } = item;
      return (acc + (price * quantity));
    }, 0);

    return totalPriceCart;
  }

  render() {
    const { shoppingCart, className } = this.state;
    const { handleDecrease, handleIncrease, handleRemove, totalPrice } = this;

    return (
      <section className={ `${className}` }>
        <header>
          <Link to="/" data-testid="shopping-cart-button">Voltar</Link>
          <h1>Carrinho de Compras</h1>
        </header>
        <div className="cart-product-list">
          {
            shoppingCart.length <= 0
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : shoppingCart.map((item, index) => (
                <ShoppingCartItem
                  shoppingCart={ item }
                  key={ index }
                  handleDecrease={ () => handleDecrease(index) }
                  handleIncrease={ () => handleIncrease(index) }
                  handleRemove={ () => handleRemove(index) }
                />
              ))
          }
        </div>
        <div>
          <p>{ `Total: R$ ${totalPrice()}` }</p>
        </div>
        <div>
          <Link to="/checkout">
            <Button
              name="checkout-btn"
              title="Finalizar Compra"
              dataTestId="checkout-products"
              className="checkout-btn"
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
