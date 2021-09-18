import React from 'react';
import PropTypes from 'prop-types';
import StarsRating from './StarsRating';

class Comment extends React.Component {
  render() {
    const {
      email,
      comment = '',
      rate,
      className,
    } = this.props;

    return (
      <section className={ className }>
        <div>
          <span>{ email }</span>
          <StarsRating rate={ rate } />
        </div>
        <p>{ comment }</p>
      </section>
    );
  }
}

Comment.defaultProps = {
  comment: '',
};

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string,
  rate: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Comment;
