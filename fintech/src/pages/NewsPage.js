import React, { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import InputComponents from "../components/InputComponent";
import ListComponents from "../components/ListComponents";

const NewsPage = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [newsList, setNewsList] = useState([]);
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchInputText(value);
    console.log(value);
  };
  const handleSearchButtonClick = () => {
    //axios 통해서 news API 에 요청 보내기
    //템플릿 리터럴을 통해 API URL 작성해보기
    console.log("뉴스 데이터 내용");
  };
  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <InputComponents
        handleChange={handleSearchInputChange}
        handleClick={handleSearchButtonClick}
      ></InputComponents>
      <ListComponents newsList={newsList}></ListComponents>
    </div>
  );
};

export default NewsPage;
