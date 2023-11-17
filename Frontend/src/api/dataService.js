import axios from "axios";
import {
  CATEGORIES_URL,
  POSTS_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../utils/constants";

const getAllPosts = async (token) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: POSTS_URL,
      method: "get",
      headers: {
        Authorization: "Token " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`);
  }
};

const getAllCategories = async (token) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: CATEGORIES_URL,
      method: "get",
      headers: {
        Authorization: "Token " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`);
  }
};

const register = async (user, password) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: REGISTER_URL,
      method: "post",
      data: {
        username: user,
        password: password,
      },
    });
    return response;
  } catch {
    console.log(`Неверные данные: ${error}`);
  }
};

const login = async (user, password) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: LOGIN_URL,
      method: "post",
      data: {
        username: user,
        password: password,
      },
    });
    return response;
  } catch (error) {
    console.log(`Неверные данные: ${error}`);
  }
};

export { login, register, getAllCategories, getAllPosts };
