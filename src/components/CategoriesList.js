/*

Componente => CategoriesList

Requisito(s) correspondente(s) => 4

Descrição => Recebe um array de objetos como props e cria uma lista não ordenada.
O array é percorrido, criando, para cada objeto, um novo item da lista, contendo o valor da propriedade "name" do objeto.

Observações => atributo "key" obrigatório para cada elemento criado na função "map".
atributo "data-testid" obrigatório para passar no teste de requisito.

*/

import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <div className="categories-list">
        {categories.map((categorie) => (
          <button
            className="category-button"
            type="button"
            id={ categorie.id }
            onClick={ handleClick }
            key={ categorie.id }
            data-testid="category"
          >
            { categorie.name }
          </button>
        ))}
      </div>
    );
  }
}

CategoriesList.defaultProps = {
  handleClick: () => {},
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func,
};

export default CategoriesList;
