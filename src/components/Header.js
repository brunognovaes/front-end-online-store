import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import CartIconAndCounter from './CartIconAndCounter';

class Header extends React.Component {
  render() {
    const { search, onChange, onClick } = this.props;
    return (
      <header className="main-products-header">
        <img
          className="header-image"
          src="https://cdn.discordapp.com/attachments/864189505500872756/864959971628417044/logo.png"
          alt=""
        />
        <Search
          value={ search }
          onChange={ onChange }
          onClick={ onClick }
        />
        <CartIconAndCounter />
      </header>
    );
  }
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
