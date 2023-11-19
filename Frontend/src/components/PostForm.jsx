import React, { useEffect, useState } from "react";
import "../styles/PostForm.scss";
import MyInput from "./UI/MyInput.jsx";
import MyButton from "./UI/MyButton.jsx";
import { getAllCategories } from "../api/dataService.js";

const PostForm = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [allCategories, setAllCategories] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getAllCategories(token)
      .then((response) => {
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.log("Ошибка получения данных");
      });
  }, []);

  const handlePostCtreation = () => {
    console.log("created");
  };

  return (
    <div className="post-form">
      <header className="page-header">Создание поста</header>
      <div className="user">Автор поста: {user}</div>
      <MyInput
        label="Заголовок"
        placeholder="введите заголовок..."
        handler={setTitle}
      />
      <MyInput
        label="Контент"
        placeholder="введите пост..."
        handler={setContent}
      />
      <MyButton title="Создать" eventHandler={handlePostCtreation} />
    </div>
  );
};

export default PostForm;
