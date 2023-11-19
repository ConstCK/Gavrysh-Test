const initialState = {
  isAuth: false,
  currentCategory: "Все",
  postList: [],
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
    case "setCategory": {
      const newState = { ...state, currentCategory: action.payload.data };
      return newState;
    }
    case "setPostList": {
      const newState = { ...state, postList: action.payload.data };
      return newState;
    }
    default:
      return state;
  }
}
export default mainReducer;
