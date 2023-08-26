import { screeningData } from "../../constants";
import ScreeningKesehatanMandiriCard from "../ScreeningKesehatanMandiriCard";

const ScreeningKesehatanMandiri = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-mainGrey">
        Skrining Kesehatan Mandiri
      </h3>

      <div className="flex flex-col gap-4 ">
        {screeningData.map((screening) => (
          <ScreeningKesehatanMandiriCard
            image={screening.image}
            title={screening.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreeningKesehatanMandiri;
