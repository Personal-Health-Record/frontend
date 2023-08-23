import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="border border-lightGrey w-full px-3 h-11 rounded-2xl focus:outline-none focus:border-blue-500"
        placeholder="Cari riwayat resume medis"
      />
      <Image
        src="/images/search.png"
        alt=""
        width={30}
        height={30}
        className="absolute top-2 right-3"
      />
    </div>
  );
};

export default SearchBar;
