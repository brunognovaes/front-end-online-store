import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      title,
      onClick,
      className,
      labelValue,
      name,
      dataTestId,
      disabled,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelValue }
        <button
          name={ name }
          className={ className }
          type="button"
          onClick={ onClick }
          data-testid={ dataTestId }
          disabled={ disabled }
        >
          { title }
        </button>
      </label>
    );
  }
}

Button.defaultProps = {
  labelValue: '',
  dataTestId: '',
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  labelValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
