import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class StarsRating extends React.Component {
  render() {
    const {
      rate,
      onClick,
    } = this.props;
    return (
      <div>
        { Array.from({ length: 5 }).map((_star, index) => {
          const starClass = (rate >= (index + 1) ? 'filled' : '');
          return (<Button
            key={ `star-${index}` }
            type="button"
            className={ `material-icons star ${starClass}` }
            onClick={ (event) => onClick(event, (index + 1)) }
            title="star_outline"
          />);
        })}
      </div>

    );
  }
}

StarsRating.defaultProps = {
  onClick: () => {},
};

StarsRating.propTypes = {
  rate: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default StarsRating;
