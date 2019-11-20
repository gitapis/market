import { ErrorType, LoadingType, SuccessType} from '../components/RequestStatus/index';
import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_REQUEST_ERROR,
  GET_ALL_PRODUCTS_REQUEST_SUCCESS,
} from '../API/actions/index';

const defaultState = {
  productsInformations : {
    informations: null,
    fetchingStatus: SuccessType,
  }
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS_REQUEST :
      return {
        ...state,
        productsInformations : {
          ...state.productsInformations,
          fetchingStatus: LoadingType,
        }
      };

    case GET_ALL_PRODUCTS_REQUEST_ERROR :
      return {
        ...state,
        productsInformations : {
          ...state.productsInformations,
          fetchingStatus: ErrorType,
        }
      };

    case GET_ALL_PRODUCTS_REQUEST_SUCCESS :
      return {
        ...state,
        productsInformations : {
          ...state.productsInformations,
          informations: action.payload,
          fetchingStatus: SuccessType,
        }
      };

    default : return state;
  }
}
