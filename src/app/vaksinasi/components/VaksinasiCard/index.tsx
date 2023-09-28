import React from "react";

interface Props {
  title: string;
  isComplete: boolean;
}

const VaksinasiCard = ({ isComplete, title }: Props) => {
  return (
    <div
      className={`flex items-center justify-center shadow-lg rounded-2xl px-2 py-5 mb-3 text-center`}
      style={{
        backgroundColor: isComplete ? "#9FDBFD" : "white",
      }}
    >
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default VaksinasiCard;
