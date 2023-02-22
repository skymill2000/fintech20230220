import React, { useState } from "react";
import Welcome from "./Welcome";

const ListComponents = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news, index) => {
        return <p key={index}>{news.title}</p>;
      })}
    </div>
  );
};

export default ListComponents;
