import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      value,
      onChange,
      name,
      isRequired,
      labelValue,
      className,
      placeholder,
      dataTestId,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { labelValue }
        <textarea
          className={ className }
          value={ value }
          onChange={ onChange }
          name={ name }
          required={ isRequired }
          placeholder={ placeholder }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Textarea.defaultProps = {
  labelValue: '',
  dataTestId: '',
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  labelValue: PropTypes.string,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

export default Textarea;
