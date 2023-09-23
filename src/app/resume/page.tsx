"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardResume from "./components/CardResume";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";
import { dummyResumeData } from "./dummyData";

const ResumePage = () => {
  const [resumeData, setResumeData] = useState(dummyResumeData);
  
  useEffect(() => {
    const resumeDataStorage = localStorage.getItem('resumeDataStorage');
    if (resumeDataStorage) {
      setResumeData(JSON.parse(resumeDataStorage));
    }
  }, [])

  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar />
        <TopCard />
        {resumeData?.map((resume) => (
          <CardResume
            resume={resume}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
