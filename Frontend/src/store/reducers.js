const initialState = {
  isAuth: true,
};
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "logIn": {
      const newState = { ...state, isAuth: action.payload.data };
      return newState;
    }
    case "logOut": {
      const newState = { ...state, isAuth: action.payload.data };
      return newState;
    }
    default:
      return state;
  }
}
export default mainReducer;
