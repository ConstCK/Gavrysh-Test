import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./UI/Loader.jsx";
import MyButton from "./UI/MyButton.jsx";
import { getAllPosts } from "../api/dataService";
import store from "../store/store.js";
import { SET_POST_LIST } from "../store/actions.js";

const ContentBar = (props) => {
  const [posts, setPosts] = useState(store.getState().postList);
  const [currentCategory, setCurrentCategory] = useState(
    store.getState().currentCategory
  );
  const [dataLoaded, setDataLoaded] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  store.subscribe(() => {
    console.log(store.getState());
    setCurrentCategory(store.getState().currentCategory);
  });
  useEffect(() => {
    getAllPosts(token)
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

  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <div className="content-bar">
      {!dataLoaded ? (
        <Loader />
      ) : (
        <div className="posts-container">
          {posts.map((element) => {
            return (
              <div key={element.id} className="post-item">
                <header>{element.title}</header>
                <div className="post-content">
                  {element.content.slice(1, 100)}...
                </div>
                <div className="post-managing">
                  <div className="post-link">
                    <Link to={`/post/${element.id}`}>Подробнее...</Link>
                  </div>
                  <MyButton
                    title="Удалить"
                    eventHandler={handleDelete}
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
