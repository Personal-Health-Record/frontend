import Image from "next/image";

const Header = () => {
  return (
    <div className="flex border-b-2 py-2 px-3 items-center gap-5">
      <Image src="/images/profile-icon.png" alt="" width={50} height={50} />
      <h3 className="text-2xl font-bold text-mainGrey">Halo, Raihan</h3>
    </div>
  );
};

export default Header;
