import React from "react";
import "../styles/PostPage.scss";
import Post from "../components/Post.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const PostPage = () => {
  return (
    <div className="post-page">
      <Header />
      <Post />
      <Footer />
    </div>
  );
};

export default PostPage;
