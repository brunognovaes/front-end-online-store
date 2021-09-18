import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import Button from './Button';

class ShoppingCartItem extends React.Component {
  render() {
    const {
      shoppingCart,
      handleDecrease,
      handleIncrease,
      handleRemove,
    } = this.props;
    const { title, price, thumbnail } = shoppingCart;

    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <Button
            className="shopping-cart-remove-btn"
            title="X"
            name="remove-cart-item"
            onClick={ handleRemove }
          />
          <AddCartButton
            shoppingCart={ shoppingCart }
            handleDecrease={ handleDecrease }
            handleIncrease={ handleIncrease }
          />
          <p>{ `R$ ${price}` }</p>
        </div>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  shoppingCart: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
