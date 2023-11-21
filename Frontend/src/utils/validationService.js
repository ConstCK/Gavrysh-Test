const authValidation = (login, password) => {
  return login.length > 0 && password.length > 7;
};

const postValidation = (category, title, content) => {
  return (
    category.length > 0 &&
    category != "Выберите категорию..." &&
    title.length > 0 &&
    content.length > 0
  );
};

export { authValidation, postValidation };
