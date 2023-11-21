import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PostForm.scss";
import MyInput from "./UI/MyInput.jsx";
import MyArea from "./UI/MyArea.jsx";
import MyButton from "./UI/MyButton.jsx";
import MySelect from "./UI/MySelect.jsx";
import { getAllCategories, createPost } from "../api/dataService.js";
import { postValidation } from "../utils/validationService.js";

const PostForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [allCategories, setAllCategories] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setAllCategories(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("Ошибка получения данных");
      });
  }, []);
  const handleCategory = (event) => {
    console.log(event);
    setCategory(event);
  };
  const handleTitle = (event) => {
    setTitle(event);
  };
  const handleContent = (event) => {
    setContent(event);
  };
  const handlePostCtreation = () => {
    createPost(token, {
      title: title,
      content: content,
      category: category,
      author: user,
    })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.log("Ошибка создания поста"));
  };

  return (
    <div className="post-form">
      <header className="page-header">Создание поста</header>
      <div className="user">Автор поста: {user}</div>
      {loaded && (
        <MySelect
          title="Выберите категорию..."
          data={allCategories}
          handler={handleCategory}
        />
      )}
      <MyInput
        label="Заголовок"
        placeholder="введите заголовок..."
        handler={handleTitle}
      />
      <MyArea
        label="Контент"
        placeholder="введите пост..."
        handler={handleContent}
      />
      <MyButton
        title="Создать"
        handler={handlePostCtreation}
        disabled={postValidation(category, title, content) ? false : true}
      />
    </div>
  );
};

export default PostForm;
