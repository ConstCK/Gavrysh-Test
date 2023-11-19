import React, { useEffect, useState } from "react";
import "../styles/SideBar.scss";
import MyButton from "./UI/MyButton.jsx";
import { getAllCategories } from "../api/dataService.js";
import Loader from "./UI/Loader.jsx";
import store from "../store/store.js";
import { SET_CATEGORY } from "../store/actions.js";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getAllCategories(token)
      .then((response) => {
        setCategories(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log("Ошибка получения данных");
      });
  }, [dataLoaded]);

  const handleSort = (event) => {
    store.dispatch(SET_CATEGORY(event.currentTarget.innerText));
  };

  return (
    <div className="side-bar">
      {!dataLoaded ? (
        <Loader />
      ) : (
        <div className="category-container">
          <MyButton title="Все" eventHandler={handleSort} />
          {categories.map((element) => {
            return (
              <div key={element.id}>
                <MyButton title={element.name} eventHandler={handleSort} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
