import Image from 'next/image';

interface Props {
  isDoctor: boolean;
}

const HeaderHome = ({ isDoctor }: Props) => {
  return (
    <div className="flex border-b-2 py-3 px-4 items-center gap-5">
      <Image
        src={`/images/${isDoctor ? 'docter-2.png' : 'profile-icon.png'}`}
        alt=""
        width={50}
        height={50}
      />
      <h3 className="text-2xl font-bold text-mainGrey">Halo, Raihan</h3>
    </div>
  );
};

export default HeaderHome;
