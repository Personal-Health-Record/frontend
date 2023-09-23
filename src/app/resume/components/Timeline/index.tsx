import { getDiffDate } from "@/app/common/dateHelper";
import { dataRiwayat } from "../../constants";
import { Resume } from "../../models";

type TimelineProps = {
  dataRiwayat: Resume[];
};

const Timeline = (props: TimelineProps) => {
  const getRangeTime = (index: number) => {
    const currentResume = props.dataRiwayat[index];
    const nextResume = props.dataRiwayat[index + 1];
    if (nextResume) {
      const dateBefore = new Date(currentResume.date);
      const dateAfter = new Date(nextResume.date);
      return `${getDiffDate(dateBefore, dateAfter)} hari`;
    }
  }

  const renderRangeTime = (index: number) => {
    const rangeTime = getRangeTime(index);
    return rangeTime && <p className="text-xs flex-1 text-end ">{rangeTime}</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {props.dataRiwayat.map((riwayat, index) => (
        <div className="flex justify-center gap-3 relative">
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs flex-1 text-end ">{riwayat.date}</p>
            {renderRangeTime(index)}
          </div>

          <div className="relative flex">
            <div className="bg-blue-400 w-5 h-5 rounded-xl z-0" />
            {index !== dataRiwayat.length - 1 && (
              <div className="bg-slate-300 w-1 h-32 absolute left-1/2 transform -translate-x-1/2 z-[-1]" />
            )}
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs ">{riwayat.location}</p>
            <p className="text-xs ">{riwayat.diagnose}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
