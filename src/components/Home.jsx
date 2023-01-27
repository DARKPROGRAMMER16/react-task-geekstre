import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  //   let edit_dropdown = ["Allow edit", "Do not allow edit"];
  //   let colors = ["black", "red", "grreen"];
  //   let fontSizes = [10, 15, 20];

  const [edit, setEdit] = useState("Allow edit");
  const [color, setColor] = useState("black");
  const [fontsize, setFontSize] = useState(15);
  const [font, setFont] = useState("monospace");

  return (
    <>
      <div className="container d-flex justify-content-around">
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {edit}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setEdit("Allow edit");
                }}
              >
                Allow edit
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setEdit("Do not allow edit");
                }}
              >
                Do not allow edit
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {color}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setColor("black");
                }}
              >
                black
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setColor("blue");
                }}
              >
                blue
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setColor("green");
                }}
              >
                green
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {fontsize}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFontSize(15);
                }}
              >
                15
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFontSize(16);
                }}
              >
                16
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFontSize(17);
                }}
              >
                17
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {font}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFont("monospace");
                }}
              >
                monospace
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFont("verdana");
                }}
              >
                verdana
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setFont("Fantasy");
                }}
              >
                Fantasy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-75 d-flex justify-content-center align-items-center c-container">
        <div className="container">
          <p
            contentEditable={edit === "Allow edit" ? "true" : "false"}
            style={{
              color: `${color}`,
              fontSize: fontsize,
              fontFamily: `${font}`,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            cumque necessitatibus quidem provident tenetur voluptatum, vitae
            excepturi officiis ipsa nulla dolorum ab ipsam doloremque
            exercitationem nemo esse dignissimos aperiam repellendus in, earum
            itaque non harum facilis eligendi. Eos, aliquid blanditiis
            praesentium nemo esse quo tempora est atque dolorum assumenda
            impedit quas laborum autem quod dignissimos sint explicabo
            distinctio! Corporis et quam alias necessitatibus magnam, fuga
            voluptatem quo nobis libero voluptate dignissimos vero deserunt
            cupiditate quae numquam aliquam a id saepe itaque odit. Cumque
            dolore ab nisi, ad, deserunt repudiandae aspernatur, in labore nulla
            voluptatibus maiores! Fugiat architecto illo doloremque ullam!
          </p>
          {/* <input type="text" value={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Errorcumque necessitatibus quidem provident teneturvoluptatum, vitae excepturi officiis ipsa nulla dolorum ab ipsam doloremque exercitationem nemo esse dignissimos aperiam repellendus in, earumitaque non harum facilis eligendi. Eos, aliquid blanditiipraesentium nemo esse quo tempora est atque dolorum assumendaimpedit quas laborum autem quod dignissimos sint explicabo distinctio! Corporis et quam alias necessitatibus magnam, fugavoluptatem quo nobis libero voluptate dignissimos vero deserunt cupiditate quae numquam aliquam a id saepe itaque odit. Cumquedolore ab nisi, ad, deserunt repudiandae aspernatur, in labore nulla voluptatibus maiores! Fugiat architecto illo doloremque ullam!"}/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
