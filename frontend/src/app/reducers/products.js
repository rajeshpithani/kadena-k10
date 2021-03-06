import { FETCH, SUCCESS, FAILURE, START, FINISH,
  PRODUCTS_LOAD, PRODUCTS_FAVORITE_LOAD, PRODUCT_MARK_AS_FAVOURITE, PRODUCT_UNMARK_AS_FAVOURITE
} from 'app.consts';


const defaultState = {
  categories: [],
  products: [],
  isLoading: false
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
  case PRODUCTS_LOAD + FETCH:
  case PRODUCTS_FAVORITE_LOAD + FETCH:
    return {
      ...state,
      isLoading: true
    };

  case PRODUCTS_LOAD + SUCCESS:
    return {
      ...state,
      products: payload.ui.products,
      categories: payload.ui.categories,
      isLoading: false
    };

  case PRODUCTS_FAVORITE_LOAD + SUCCESS:
    return {
      ...state,
      products: payload.ui,
      isLoading: false
    };

  case PRODUCTS_LOAD + FAILURE:
  case PRODUCTS_FAVORITE_LOAD + FAILURE:
    return {
      ...state,
      isLoading: false
    };

  case PRODUCT_MARK_AS_FAVOURITE:
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === action.id) {
          product.isFavourite = true;
        }
        return product;
      })
    };

  case PRODUCT_UNMARK_AS_FAVOURITE:
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === action.id) {
          product.isFavourite = false;
        }
        return product;
      })
    };

  default:
    return state;
  }
};
