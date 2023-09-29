"use client";

import { useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import NewsCard from "./components/NewsCard";
import NewsTag from "./components/NewsTag"
import { dummyNewsData } from "./constants";

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
      <div className="mt-8">
        <div className="relative mt-4 px-8">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
            placeholder="Cari artikel kesehatan"
          />
        </div>
      </div>

      <div className="flex flex-wrap mt-8 px-8 gap-3">
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
      <BottomNavbar />
    </div >
  );
};

export default News;
