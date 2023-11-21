import React, { useEffect, useState } from "react";
import "../styles/ContentBar.scss";
import { Link } from "react-router-dom";
import Loader from "./UI/Loader.jsx";
import MyButton from "./UI/MyButton.jsx";
import { deletePost, getAllPosts } from "../api/dataService";
import store from "../store/store.js";
import { SET_POST_LIST } from "../store/actions.js";

const ContentBar = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState(store.getState().postList);
  const [currentCategory, setCurrentCategory] = useState(
    store.getState().currentCategory
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  store.subscribe(() => {
    setCurrentCategory(store.getState().currentCategory);
    setPosts(store.getState().postList);
  });
  useEffect(() => {
    getAllPosts()
      .then((response) => {
        if (currentCategory == "Все") {
          store.dispatch(SET_POST_LIST(response.data));
        } else {
          let data = response.data;
          data = data.filter((element) => {
            return element.category.name == currentCategory;
          });
          store.dispatch(SET_POST_LIST(data));
        }
        setPosts(store.getState().postList);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log("Ошибка получения данных", error);
      });
  }, [currentCategory]);

  const handleDelete = (id) => {
    deletePost(token, id)
      .then((response) => {
        let result = posts.filter((element) => {
          return element.id != id;
        });
        store.dispatch(SET_POST_LIST(result));
      })
      .catch((error) => {
        console.log("Ошибка удаления данных");
      });
  };
  return (
    <div className="content-bar">
      {!dataLoaded ? (
        <div className="load-bar">
          <Loader />
        </div>
      ) : (
        <div className="posts-container">
          <header className="page-header">
            Список библиотек и фреймворков
          </header>
          <div className="category-header">Категория: {currentCategory}</div>
          {posts.map((element) => {
            return (
              <div key={element.id} className="post-item">
                <header className="post-header">{element.title}</header>
                <div className="post-content">
                  {element.content.slice(0, 150)}...
                </div>
                <div className="post-managing">
                  <div className="post-link">
                    <Link to={`/post/${element.id}`}>Подробнее...</Link>
                  </div>
                  <MyButton
                    title="Удалить"
                    handler={() => handleDelete(element.id)}
                    disabled={user == element.author.username ? false : true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContentBar;
