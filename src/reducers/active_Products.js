export default function(state = [], action) {
  switch(action.type) {
    case 'SELECT_PRODUCT' :
      return [
        ...state,
        action.payload
      ];

    default : return state;
  }
}
