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

export { LOG_IN, LOG_OUT };
