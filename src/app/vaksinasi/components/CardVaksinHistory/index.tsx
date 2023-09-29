import { Vaksinasi } from "../../constants";

type HistoryProps = {
  vaksinData: Vaksinasi;
}

const CardVaksinHistory = ({ vaksinData }: HistoryProps) => {
  return (
    <div className="flex justify-between px-5 py-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-mainGrey">{vaksinData.date}</p>
        <p className="text-sm text-lightGrey">Vaksin {vaksinData.type}</p>
      </div>

      <p className="text-xs text-mainGrey">{vaksinData.location}</p>
    </div>
  );
};

export default CardVaksinHistory;
