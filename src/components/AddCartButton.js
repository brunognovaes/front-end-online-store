import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class AddCartButton extends React.Component {
  render() {
    const { handleDecrease, handleIncrease, shoppingCart } = this.props;
    const { quantity, availableQuantity } = shoppingCart;
    if (shoppingCart.quantity === null || shoppingCart.quantity === undefined) {
      shoppingCart.quantity = 1;
    }
    return (
      <div>
        <Button
          name="decreaseButton"
          className="decrease-button"
          onClick={ handleDecrease }
          title="-"
          dataTestId="product-decrease-quantity"
          disabled={ quantity <= 1 }
        />
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <Button
          name="increaseButton"
          className="increase-button"
          onClick={ handleIncrease }
          title="+"
          dataTestId="product-increase-quantity"
          disabled={ quantity >= availableQuantity }
        />
      </div>
    );
  }
}

AddCartButton.propTypes = {
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  shoppingCart: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    availableQuantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddCartButton;
