import Header from "@/app/components/Header";
import FormMental from "../components/FormMental";
import { mentalQuestion } from "../constants";

const ScreeningMental = () => {
  return (
    <div className="flex flex-col">
      <Header title="Skrining Kesehatan Mental" />

      <div className="flex py-5 px-4 flex-col gap-5">
        <h3 className="font-semibold text-mainGrey text-sm mb-1">
          Dalam 2 minggu terakhir, seberapa sering Anda terganggu oleh
          masalah-masalah berikut?
        </h3>

        {mentalQuestion.map((question) => (
          <FormMental title={question} />
        ))}
      </div>
    </div>
  );
};

export default ScreeningMental;
