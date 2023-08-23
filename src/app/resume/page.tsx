import Header from "../components/Header";
import SearchBar from "./components/SearchBar";

const ResumePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex px-4 py-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default ResumePage;
