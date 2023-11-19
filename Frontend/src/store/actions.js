const LOG_IN = {
  type: "logIn",
  payload: {
    data: true,
  },
};
const LOG_OUT = {
  type: "logOut",
  payload: {
    data: false,
  },
};
const SET_CATEGORY = (category) => {
  return {
    type: "setCategory",
    payload: {
      data: category,
    },
  };
};

const SET_POST_LIST = (posts) => {
  return {
    type: "setPostList",
    payload: {
      data: posts,
    },
  };
};

export { LOG_IN, LOG_OUT, SET_CATEGORY, SET_POST_LIST };
