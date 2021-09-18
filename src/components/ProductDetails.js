import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RatingForm from './RatingForm';
import * as api from '../services/api';
import AddCartButton from './AddCartButton';
import Button from './Button';
import Header from './Header';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      // loading: true,
      cartQuantity: 0,
    };

    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.increaseOneInTheCart = this.increaseOneInTheCart.bind(this);
  }

  async componentDidMount() {
    const {
      match: {
        params: {
          category,
          id,
        },
      },
    } = this.props;
    const call = await api.getProductsFromCategoryAndQuery(category, id);
    const product = call.results
      ? call.results[0]
      : call;

    const {
      title,
      price,
      thumbnail,
      shipping: {
        free_shipping: freeShipping,
      },
      categoryId,
      id: productId,
      available_quantity: availableQuantity,
    } = product;
    const newProduct = {
      title,
      price,
      thumbnail,
      quantity: 1,
      freeShipping,
      availableQuantity,
      id: productId,
      categoryId,
    };

    this.handleAddProduct(newProduct);
  }

  handleIncrease() {
    const { product } = this.state;
    product.quantity += 1;
    this.setState({ product });
  }

  handleDecrease() {
    const { product } = this.state;
    product.quantity -= 1;
    this.setState({ product });
  }

  handleAddProduct(newProduct) {
    this.setState({
      product: newProduct,
      // loading: false,
    });
  }

  saveProductLocalStorage() {
    const { product } = this.state;
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    cartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.increaseOneInTheCart();
  }

  increaseOneInTheCart() {
    const quantityLocalStorage = JSON.parse(localStorage.cartProducts).length;
    console.log(quantityLocalStorage);
    this.setState({
      cartQuantity: quantityLocalStorage,
    });
    const { cartQuantity } = this.state;
    console.log(cartQuantity);
  }

  render() {
    // const { loading } = this.state;
    // if (loading) {
    //   return <div>loading...</div>;
    // }

    const { product } = this.state;
    const {
      title,
      price,
      thumbnail,
      freeShipping,
    } = product;
    const { handleDecrease, handleIncrease } = this;
    const frete = freeShipping ? 'SIM' : 'NÃO';
    return (
      <>
        <Header />
        <div>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="product-detail-name">{title}</h3>
          <span>{`Frete grátis: ${frete}`}</span>
          <span>{`R$ ${price}`}</span>
          <Button
            dataTestId="product-detail-add-to-cart"
            onClick={ this.saveProductLocalStorage }
            title="Adicione ao carrinho"
            className="add-cart-btn"
            name="add-cart-btn"
          />
          <Link
            to="/shopping-cart"
            // data-testid="shopping-cart-button"
          >
            Comprar
          </Link>
          <AddCartButton
            handleDecrease={ handleDecrease }
            handleIncrease={ handleIncrease }
            shoppingCart={ product }
          />
          <RatingForm />
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
