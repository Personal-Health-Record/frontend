import BottomNavbar from "@/app/components/BottomNavbar";
import Header from "@/app/components/Header";
import Image from "next/image";

const NewsDetail = () => {
  const dateText = (date: string) => {
    return (
      <p style={{
        color: "#9A9A9A",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
      }}>
        {date}
      </p>
    );
  }

  const titleText = (title: string) => {
    return (
      <h1 style={{
        color: "#5F5F5F",
        fontSize: 20,
        fontWeight: 700,
      }}>
        {title}
      </h1>
    );
  }

  const referenceText = (reference: string) => {
    return (
      <h2 style={{
        color: "rgba(0, 0, 0, 0.50)",
        fontSize: 14,
        fontWeight: 400,
      }}>
        {reference}
      </h2>
    );
  }

  const renderDescriptionText = (description: string) => {
    return (
      <div className="mt-2">
        <p style={{
          color: "#5F5F5F",
          fontSize: 14,
          fontWeight: 400,
        }}>
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header title="Artikel Kesehatan" />
      <div className="mt-4">
        {dateText("23 April 2021")}
      </div>

      <div className="mt-1">
        {titleText("Berat Badan Ideal Bantu Cegah Timbulnya Diabetes")}
      </div>

      <div className="mt-1">
        {referenceText("Sumber: P2PTM Kemenkes RI")}
      </div>

      <div className="flex justify-center items-center">
        <Image src={"https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6"} alt="" width={300} height={200} />
      </div>

      <div className="mt-4 pb-20">
        {renderDescriptionText("Diabetes Mellitus (DM) merupakan salah satu penyakit kronis penyebab kematian tertinggi di Indonesia. Bahkan jumlah angka kesakitannya terus meningkat. Data Riskesdas 2018 menunjukkan prevalensi diabetes yakni sebesar 8,5%, meningkat dibandingkan Riskesdas 2013 yaitu sebesar 6,9%.")}
        {renderDescriptionText("Ketua Endokrinologi Indonesia (PERKENI), Prof. DR. dr. Ketut Suastika, SpPD-KEMD mengatakan salah satu penyebab timbulnya penyakit diabetes adalah obesitas yang tidak segera ditangani. Pada pasien prediabetes, ditandai dengan gula darah yang naik, Gula Darah Puasa berkisar 100-125 sementara Gula Darah Setelah Makan yakni 140<200.")}
        {renderDescriptionText("Ketua Endokrinologi Indonesia (PERKENI), Prof. DR. dr. Ketut Suastika, SpPD-KEMD mengatakan salah satu penyebab timbulnya penyakit diabetes adalah obesitas yang tidak segera ditangani. Pada pasien prediabetes, ditandai dengan gula darah yang naik, Gula Darah Puasa berkisar 100-125 sementara Gula Darah Setelah Makan yakni 140<200.")}
        {renderDescriptionText("Ketua Endokrinologi Indonesia (PERKENI), Prof. DR. dr. Ketut Suastika, SpPD-KEMD mengatakan salah satu penyebab timbulnya penyakit diabetes adalah obesitas yang tidak segera ditangani. Pada pasien prediabetes, ditandai dengan gula darah yang naik, Gula Darah Puasa berkisar 100-125 sementara Gula Darah Setelah Makan yakni 140<200.")}
      </div>

      <BottomNavbar />
    </div>
  );
};

export default NewsDetail;
