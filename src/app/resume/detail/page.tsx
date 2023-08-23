import Header from "@/app/components/Header";
import CardResumeDetail from "../components/CardResumeDetail";
import { detailResume } from "../constants";

const ResumeDetail = () => {
  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />

      <div className="flex flex-col w-screen px-4 py-4 gap-3">
        <h3 className="font-semibold">Informasi Umum</h3>
        {detailResume?.map((resume, idx) => (
          <CardResumeDetail
            data={resume.value}
            title={resume.title}
            key={`resume-${resume.value}-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeDetail;
