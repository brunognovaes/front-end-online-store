/*

Componente => ProductCard

Requisito(s) correspondente(s) => 5

Descrição => Recebe um objeto como props e cria uma div com dados do objeto.
Dentro da div é criada uma imagem, um título e um preço.

*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductsCard extends React.Component {
  constructor() {
    super();
    this.saveProductLocalStorage = this.saveProductLocalStorage.bind(this);
  }

  saveProductLocalStorage() {
    const { product, increaseOneInTheCart } = this.props;
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const {
      id,
      title,
      price,
      thumbnail,
      category_id: categoryId,
      available_quantity: availableQuantity,
    } = product;
    const newProduct = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
      categoryId,
      availableQuantity,
    };
    cartProducts.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    increaseOneInTheCart();
  }

  render() {
    const { product, dataTestId } = this.props;
    const {
      id,
      price,
      thumbnail,
      title,
      category_id: categoryId,
      shipping: {
        free_shipping: freeShipping,
      },
    } = product;
    const freteValue = freeShipping ? 'SIM' : 'NÃO';
    const { saveProductLocalStorage } = this;
    const LINK_PATH = `/product-details/${categoryId}/${id}`;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <img
          className="card-image"
          src={ thumbnail }
          alt={ title }
        />
        <h3 data-testid={ dataTestId }>
          { title }
        </h3>
        <span>
          { `R$ ${price}` }
        </span>
        <span>
          { `Frete grátis: ${freteValue}` }
        </span>
        <Button
          title="Comprar"
          onClick={ saveProductLocalStorage }
          className="buy-btn"
          name="buy"
          dataTestId="product-add-to-cart"
        />
        <Link
          to={ LINK_PATH }
          data-testid="product-detail-link"
          className="details-btn"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductsCard.defaultProps = {
  dataTestId: '',
};

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
    category_id: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  dataTestId: PropTypes.string,
  increaseOneInTheCart: PropTypes.func.isRequired,
};

export default ProductsCard;
