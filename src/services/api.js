export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const limit = 3;
  if (query && query.slice(0, limit) === 'MLB') {
    const URL = `https://api.mercadolibre.com/items/${query}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  }

  if (categoryId && query) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  }
  if (query) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(URL);
  const results = await response.json();
  return results;
}
