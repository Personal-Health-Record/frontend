import Image from "next/image";

const HeaderHome = () => {
  return (
    <div className="flex border-b-2 py-3 px-4 items-center gap-5">
      <Image src="/images/profile-icon.png" alt="" width={50} height={50} />
      <h3 className="text-2xl font-bold text-mainGrey">Halo, Raihan</h3>
    </div>
  );
};

export default HeaderHome;
