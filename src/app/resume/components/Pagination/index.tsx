type PaginationProps = {
  setPageNumber: (pageNumber: number) => void;
  pageNumber: number;
  pageSize: number;
  totalData: number;
};

const Pagination = (props: PaginationProps) => {
  const { setPageNumber, pageNumber, pageSize, totalData } = props;
  const totalPage = Math.ceil(totalData / pageSize);
  
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
  const handleNextPage = () => {
    if (pageNumber < totalPage) {
      setPageNumber(pageNumber + 1);
    }
  }

  // TODO: kalo disini banyak banget page numnya gimana?
  const renderPageNumber = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <p className="text-xs" key={number} onClick={() => {
        setPageNumber(number);
      }}>{number}</p>
    ));
  }

  return (
    <div className="flex justify-between items-center mb-32">
      <button 
        className="bg-superLightGrey py-1 px-2 rounded-xl text-xs text-mainGrey" 
        onClick={handlePrevPage}>
        Sebelumnya
      </button>
      {renderPageNumber()}
      <button 
        className="bg-superLightGrey py-1 px-2 rounded-xl text-xs text-mainGrey"
        onClick={handleNextPage}>
        Selanjutnya
      </button>
    </div>
  );
};

export default Pagination;
