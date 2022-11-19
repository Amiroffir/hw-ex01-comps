import React from "react";

export const CardComponent = ({ url, title, desc }) => {
  return (
    <li className="list-item-container">
      <img className="list-image" src={url} alt="" srcset="" />
      <div className="content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </li>
  );
};
