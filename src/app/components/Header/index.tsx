import Image from "next/image";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-3 px-3 py-3 border-b-2 w-full">
      <Image src="/images/back.png" alt="" width={30} height={30} />
      <h3 className="font-bold text-xl text-mainGrey">{title}</h3>
    </div>
  );
};

export default Header;
