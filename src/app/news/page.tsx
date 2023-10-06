"use client";

import { useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import NewsCard from "./components/NewsCard";
import NewsTag from "./components/NewsTag"
import { dummyNewsData } from "./constants";
import Header from "../components/Header";
import SearchBar from "./components/SearchBar";

const News = () => {
  const [tag, setTag] = useState("semua")

  let newsData = dummyNewsData;
  if (tag !== "semua") {
    newsData = newsData.filter((news) => {
      return news.tags.includes(tag)
    })
  }

  return (
    <div className="flex flex-col h-screen" >
      <Header title="Artikel Kesehatan" />
      <div className="px-4">
        <SearchBar />

        <div className="flex flex-wrap mt-4 px-2 gap-2">
          <NewsTag
            tagName="semua"
            isActive={tag === 'semua' ? true : false}
            handleClick={() => {
              setTag("semua")
            }} />
          <NewsTag
            tagName="tips kesehatan"
            isActive={tag === 'tips kesehatan' ? true : false}
            handleClick={() => {
              setTag("tips kesehatan")
            }} />
          <NewsTag
            tagName="penyakit kronis"
            isActive={tag === 'penyakit kronis' ? true : false}
            handleClick={() => {
              setTag("penyakit kronis")
            }} />
        </div>

        <div className="mt-4">
          {
            newsData.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                description={news.descriptionPlaceholder}
                imageUrl={news.imageUrl}
                route={news.route} />
            ))
          }
        </div>
      </div>

      <BottomNavbar />
    </div >
  );
};

export default News;
