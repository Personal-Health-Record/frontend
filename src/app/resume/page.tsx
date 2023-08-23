import Header from "../components/Header";
import SearchBar from "./components/SearchBar";
import TopCard from "./components/TopCard";

const ResumePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-screen px-4 py-4 gap-3">
        <SearchBar />
        <TopCard />
      </div>
    </div>
  );
};

export default ResumePage;
