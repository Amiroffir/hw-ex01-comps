import React from "react";

export const HeaderComponent = ({ url, title, desc }) => {
  return (
    <>
      <header>
        <img className="image-main" src={url} alt="" srcset="" />
        <h1>{title}</h1>
      </header>
      <main>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
        <p>{desc}</p>
      </main>
    </>
  );
};
