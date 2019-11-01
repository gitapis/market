export function selectCulture(Culture) {
  return {
    type: 'SELECT_CULTURE',
    payload: Culture
  };
}

export function selectCity(City) {
  return {
    type: 'SELECT_CITY',
    payload: City
  };
}

export function selectCities(Cities) {
  return {
    type: 'SELECT_CITIES',
    payload: Cities
  };
}

export function selectCountry(Country) {
  return {
    type: 'SELECT_COUNTRY',
    payload: Country
  };
}

export function selectProduct(Product) {
  return {
    type: 'SELECT_PRODUCT',
    payload: Product
  };
}

export function unselectProduct(index) {
  return {
    type: 'UNSELECT_PRODUCT',
    payload: index
  };
}

export function unselectAllProducts() {
  return {
    type: 'UNSELECT_ALL_PRODUCTS',
    payload: null
  };
}