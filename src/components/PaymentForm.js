import React from 'react';

class PaymentForm extends React.Component {
  render() {
    return (
      <form className="paymentform-all">
        <fieldset className="paymentform-fieldset">
          <legend>Método de Pagamento</legend>
          <label htmlFor="boleto">
            Boleto
            <input type="radio" id="boleto" />
          </label>
          <p>Cartão de Crédito</p>
          <label htmlFor="visa">
            Visa
            <input type="radio" id="visa" />
          </label>
          <label htmlFor="mastercard">
            MasterCard
            <input type="radio" id="mastercard" />
          </label>
          <label htmlFor="elo">
            Elo
            <input type="radio" id="elo" />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default PaymentForm;
