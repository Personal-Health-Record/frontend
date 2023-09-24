import Header from "../components/Header";
import CardResume from "./components/CardResume";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";
import { dummyResumeData } from "./constants";

const ResumePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <SearchBar />
        <TopCard />
        {dummyResumeData?.map((resume, index) => (
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
