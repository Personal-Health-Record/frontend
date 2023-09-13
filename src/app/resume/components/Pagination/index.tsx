const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <button className="bg-superLightGrey py-1 px-2 rounded-xl text-xs text-mainGrey">
        Sebelumnya
      </button>
      <p className="text-xs">1</p>
      <p className="text-xs">2</p>
      <p className="text-xs">3</p>
      <p className="text-xs">...</p>
      <p className="text-xs">10</p>
      <button className="bg-superLightGrey py-1 px-2 rounded-xl text-xs text-mainGrey">
        Selanjutnya
      </button>
    </div>
  );
};

export default Pagination;
