import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Post.scss";
import store from "../store/store.js";

const Post = () => {
  const params = useParams();
  const [data, setData] = useState({
    title: "",
    author: "",
    content: "",
  });
  useEffect(() => {
    const result = store.getState().postList.filter((element) => {
      return element.id == params.id;
    })[0];
    console.log(result["title"]);
    setData({
      title: result["title"],
      author: result["author"]["username"],
      content: result["content"],
    });
  }, []);
  return (
    <div className="post">
      <div className="post-container">
        <header className="page-header">{data.title}</header>
        <div className="author">Автор: {data.author}</div>
        <div className="content">{data.content}</div>
      </div>
    </div>
  );
};

export default Post;
