const authValidation = (login, password) => {
  return login.length > 0 && password.length > 7;
};

export { authValidation };
