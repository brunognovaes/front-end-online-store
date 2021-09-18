/*

Página => Home

Requisito(s) correspondente(s) => 2, 3, 4 e 5

Descrição => Página inicial da aplicação.

*/

import React from 'react';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.state = {
      search: '',
      products: [],
      categories: [],
      cartQuantity: 0,
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
    this.fetchProductsCategory = this.fetchProductsCategory.bind(this);
    this.increaseOneInTheCart = this.increaseOneInTheCart.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  // Requisito 06: um handle para atribuir o id da categoria na
  //               função, quando a categoria for selecionada

  handleClickCategory(e) {
    const id = e.target.getAttribute('id');
    this.fetchProductsCategory(id);
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async fetchProducts() {
    const { search } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(null, search);
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  // Requisito 06: função para buscar os produtos por categoria

  async fetchProductsCategory(id) {
    const request = await api.getProductsFromCategoryAndQuery(id, null);
    const { results } = request;
    this.setState({
      products: results,
    });
  }

  changeSearch(e) {
    const { value } = e.target;
    this.setState({
      search: value,
    });
  }

  increaseOneInTheCart() {
    const quantityLocalStorage = JSON.parse(localStorage.cartProducts).length;
    this.setState({
      cartQuantity: quantityLocalStorage,
    });
    const { cartQuantity } = this.state;
    console.log(cartQuantity);
  }

  render() {
    console.log('atualizei');
    const { search, products, categories } = this.state;
    return (
      <div>
        <Header
          search={ search }
          onChange={ this.changeSearch }
          onClick={ this.fetchProducts }
        />
        <main className="main-home">
          <CategoriesList
            categories={ categories }
            handleClick={ this.handleClickCategory }
          />
          <section className="main-products-section">
            <ProductsList
              products={ products }
              increaseOneInTheCart={ this.increaseOneInTheCart }
            />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
