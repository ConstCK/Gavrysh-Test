import React from "react";
import "../styles/PostcreationPage.scss";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PostForm from "../components/PostForm.jsx";

const PostCreationPage = () => {
  return (
    <div>
      <Header />
      <PostForm />
      <Footer />
    </div>
  );
};

export default PostCreationPage;
