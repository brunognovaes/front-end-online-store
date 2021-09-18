import React from 'react';
import BuyerForm from '../components/BuyerForm';
import PaymentForm from '../components/PaymentForm';
import CheckoutList from '../components/CheckoutList';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      listProducts: [],
    };

    this.getCartProducts = this.getCartProducts.bind(this);
    this.totalValue = this.totalValue.bind(this);
  }

  componentDidMount() {
    this.getCartProducts();
  }

  getCartProducts() {
    const call = localStorage.getItem('cartProducts');
    this.setState({
      listProducts: JSON.parse(call),
    });
  }

  totalValue() {
    const { listProducts } = this.state;
    const totalPriceCart = listProducts.reduce((acc, item) => {
      const { price, quantity } = item;
      return (acc + (price * quantity));
    }, 0);
    return totalPriceCart;
  }

  render() {
    const { listProducts } = this.state;
    const { totalValue } = this;

    return (
      <div className="checkout-all">
        <p className="checkout-title">Revise seus Produtos</p>
        <div className="checkout-products-list">
          {listProducts.map((item) => (<CheckoutList
            key={ item.id }
            product={ item }
          />
          ))}
        </div>
        <p>
          {`Total: R$ ${totalValue()}`}
        </p>
        <BuyerForm />
        <PaymentForm />
        <button type="button" className="checkout-button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
