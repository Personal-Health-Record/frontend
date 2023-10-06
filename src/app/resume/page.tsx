"use client"

import { useState } from "react";
import Header from "../components/Header";
import CardResume from "./components/CardResume";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";
import { dummyResumeData } from "./constants";

const ResumePage = () => {
  const [data, setData] = useState(dummyResumeData)
  const onSearch = (keyword: string) => {
    if (keyword.length === 0) {
      setData(dummyResumeData)
    }

    const filteredData = dummyResumeData.filter((item) => {
      return item.location.toLowerCase().includes(keyword.toLowerCase())
    })
    setData(filteredData)
  }


  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar onSearch={onSearch}/>
        <TopCard />
        {data?.map((resume, index) => (
          <CardResume
            resume={resume}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
