/*

Componente => Search

Requisito(s) correspondente(s) => 2, 3 e 5

Descrição => Recebe uma string("value") e duas funções("onChange" e "onClick") como props e cria uma div.
Dentro da div é criado um input de tipo texto que recebe, para o atributo value, a string "value" e, para o atributo, onChange a função "onChange".
Também é criado um botão que recebe, para o atributo onClick, a função "onClick" e um parágrafo.

Observações => atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
          className="query-button"
        >
          <span className="search-button material-icons-outlined">
            search
          </span>
        </button>
        <p
          data-testid="home-initial-message"
          className="open-text"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
