const ButtonSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="bg-mainBlue rounded-3xl text-white font-semibold py-3">
        Kirim Data
      </button>

      <button className="bg-white rounded-3xl text-mainBlue border-mainBlue border font-semibold py-3 mb-6">
        Kirim Lewat Email
      </button>
    </div>
  );
};

export default ButtonSection;
