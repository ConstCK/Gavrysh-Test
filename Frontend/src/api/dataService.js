import axios from "axios";
import {
  BASE_URL,
  CATEGORIES_URL,
  POSTS_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../utils/constants";

const getAllPosts = async () => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: POSTS_URL,
      method: "get",
    });
    return response;
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`);
  }
};

const getAllCategories = async () => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: CATEGORIES_URL,
      method: "get",
    });
    return response;
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`);
  }
};

const deletePost = async (token, id) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: `${POSTS_URL}${id}`,
      method: "delete",
      headers: {
        Authorization: "Token " + token,
      },
    });
    return response;
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`);
  }
};

const createPost = async (token, data) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: POSTS_URL,
      method: "post",
      headers: {
        Authorization: "Token " + token,
      },
      data: {
        title: data.title,
        content: data.content,
        author: data.author,
        category: data.category,
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

export {
  login,
  register,
  getAllCategories,
  getAllPosts,
  deletePost,
  createPost,
};
