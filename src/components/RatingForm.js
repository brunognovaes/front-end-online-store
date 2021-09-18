import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import StarsRating from './StarsRating';
import Comment from './Comment';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      rate: 0,
      comments: [],
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleValue({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleBtnClick(event) {
    event.preventDefault();
    const { email, message, rate } = this.state;
    if (email.length !== 0) {
      this.setState((prevState) => {
        const comment = { email, message, rate };
        const newComments = prevState.comments.length > 0
          ? [...prevState.comments, comment]
          : [comment];
        return ({ comments: newComments });
      });
    }
  }

  handleRate(event, rate) {
    event.preventDefault();
    this.setState({ rate });
  }

  render() {
    const {
      email,
      message,
      rate,
      comments,
    } = this.state;
    const { handleValue, handleBtnClick, handleRate } = this;
    return (
      <section className="rating-section">
        <h2>Avaliações</h2>
        <form className="rating-form">
          <div>
            <Input
              type="email"
              value={ email }
              name="email"
              onChange={ handleValue }
              placeholder="Email"
              isRequired
              className="rating-input"
            />
            <StarsRating
              rate={ rate }
              onClick={ handleRate }
            />
          </div>
          <Textarea
            value={ message }
            name="message"
            onChange={ handleValue }
            placeholder="Mensagem (opcional)"
            isRequired={ false }
            className="rating-textarea"
            dataTestId="product-detail-evaluation"
          />
          <Button
            onClick={ handleBtnClick }
            title="Avaliar"
            className="rating-btn"
            name="rating-btn"
          />
        </form>
        { comments.length > 0 && (
          <section className="rating-comments-section">
            {
              comments.map((comment, index) => {
                const {
                  rate: commentRate,
                  email: commentEmail,
                  message: commentMessage,
                } = comment;
                return (<Comment
                  key={ `${commentEmail}${index}` }
                  rate={ commentRate }
                  email={ commentEmail }
                  comment={ commentMessage }
                  className="rating-comment"
                />);
              })
            }
          </section>
        )}
      </section>
    );
  }
}

export default RatingForm;
