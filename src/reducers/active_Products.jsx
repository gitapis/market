const addProduct = (state, product) => {
  var newBasketProducts = state;
  var basketPdt = newBasketProducts.find(x => x.productId === product.productId);

  if(basketPdt){
    newBasketProducts = newBasketProducts.map(x =>
        x.productId === product.productId
            ?{
              ...x,
              count: basketPdt.count +1
            }
            : x
    );
  }
  else {
    var newProduct ={
      ...product,
      count:1
    };
    newBasketProducts.push(newProduct);
  }
  return newBasketProducts;
}

const unselectProduct = (state, product) => {
  var newBasketProducts = [];

  if(product.count > 1){
      newBasketProducts = state.map(x =>
        x.productId === product.productId
            ?{
              ...x,
              count: product.count -1
            }
            : x
    );
  }
  else {
      state.forEach(x => x.productId !== product.productId ? newBasketProducts.push(x) : null);

  }

  return newBasketProducts;
}

export default function(state = [], action) {
  switch(action.type) {
    case 'SELECT_PRODUCT' :
      return addProduct(state, action.payload);

    case 'UNSELECT_PRODUCT' :
      return unselectProduct(state, action.payload);

     case 'UNSELECT_ALL_PRODUCTS' :
      return [];

    default : return state;
  }
}
