import { dataRiwayat } from "../../constants";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-3">
      {dataRiwayat.map((riwayat, index) => (
        <div className="flex justify-center gap-3 relative">
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs flex-1 text-end ">{riwayat.date}</p>
            <p className="text-xs flex-1 text-end ">{riwayat.rangeTime}</p>
          </div>

          <div className="relative flex">
            <div className="bg-blue-400 w-5 h-5 rounded-xl z-0" />
            {index !== dataRiwayat.length - 1 && (
              <div className="bg-slate-300 w-1 h-32 absolute left-1/2 transform -translate-x-1/2 z-[-1]" />
            )}
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs ">{riwayat?.location}</p>
            <p className="text-xs ">{riwayat?.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
