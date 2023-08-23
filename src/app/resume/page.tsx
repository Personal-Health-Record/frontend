import Header from "../components/Header";
import CardResume from "./components/CardResume";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";
import { resumeData } from "./constants";

const ResumePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-screen px-4 py-4 gap-3">
        <SearchBar />
        <TopCard />
        {resumeData?.map((resume) => (
          <CardResume
            resumeDate={resume.date}
            resumeLocation={resume.location}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
