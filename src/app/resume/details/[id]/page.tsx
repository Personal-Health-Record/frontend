"use client";

import Header from "@/app/components/Header";
import CardResumeDetail from "../../components/CardResumeDetail";
import { detailResume } from "../../constants";
import BottomNavbarMedis from "@/app/components/BottomNavbarMedis";
import { useParams } from 'next/navigation'
import { dummyResumeData } from "../../dummyData";
import { formatDate } from "@/app/common/dateHelper";

const ResumeDetail = () => {
  const params = useParams()
  const resume = dummyResumeData.find((resume) => resume.id === parseInt(params.id as string))

  if (!resume) {
    // TODO: adjust component
    return <div>Not Found</div>
  }

  return (
    <div className="flex flex-col">
      <Header title="Resume Medis" />
      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-16">
        <h3 className="font-semibold">Informasi Umum</h3>
          <CardResumeDetail
            title={"Tanggal Kunjungan"}
            data={formatDate(resume.date)}
          />
          <CardResumeDetail
            title={"Nomor Rekam Medis"}
            data={resume.recordNumber}
          />
          <CardResumeDetail
            title={"NIK Pasien"}
            data={resume.nik}
          />
          <CardResumeDetail
            title={"Jenis Pasien"}
            data={resume.patientType}
          />
          <CardResumeDetail
            title={"Nama Pasien"}
            data={resume.patientName}
          />
          <CardResumeDetail
            title={"Nama Tenaga Medis"}
            data={resume.doctorName}
          />
          <CardResumeDetail
            title={"Nama Poli"}
            data={resume.polyName}
          />
          <CardResumeDetail
            title={"Nama Fasilitas Kesehatan"}
            data={resume.location}
          />
          <CardResumeDetail
            title={"Anamnesis"}
            data={resume.anamnesis}
          />
          <CardResumeDetail
            title={"Diagnosis"}
            data={resume.diagnose}
          />
          <CardResumeDetail
            title={"Obat yang diberikan"}
            data={resume.medicine}
          />

      </div>
        {/* TODO: Hasil Pemeriksaan Section */}

      <BottomNavbarMedis />
    </div>
  );
};

export default ResumeDetail;
