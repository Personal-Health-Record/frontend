const CardHasil = () => {
  return (
    <div className="flex flex-col shadow-lg py-3 px-5 rounded-xl">
      <div className="flex justify-evenly border-b-2 py-5 items-center">
        <p className="text-xl font-semibold text-mainGrey">27.68</p>
        <p className="text-sm bg-superLightGrey px-5 py-1 rounded-2xl">
          Obesitas
        </p>
      </div>
      <div className="flex justify-center py-5">
        <p className="text-xs text-mainGrey">
          Berat ideal Anda adalah 52.02-71.96 kg
        </p>
      </div>
    </div>
  );
};

export default CardHasil;
