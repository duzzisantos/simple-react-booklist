import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { MyLogo, MyH2, bookStack, FootMenu } from "./booklistData.js";

function App() {
  return (
    <section clasName="container">
      <MyLogo />
      <MyH2 />
      <BookDiv />
      <FootMenu />
    </section>
  );
}

const BookDiv = () => {
  return bookStack.map((books) => {
    const { img, title, author, btnText } = books; //this is object deconstruction
    return (
      <div className="wrapper">
        <img src={img} alt="bookImage"></img>
        <h5 className="myH5">{title}</h5>
        <p className="authorPara">{author}</p>
        <button className="myBtn">{btnText}</button>
      </div>
    );
  });
};

ReactDOM.render(<App />, document.getElementById("root"));
