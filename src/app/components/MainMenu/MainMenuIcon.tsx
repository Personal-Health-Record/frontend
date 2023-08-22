import Image from "next/image";

interface Props {
  icon: string;
  title: string;
}

const MainMenuIcon = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center w-20 mb-5">
      <Image src={icon} alt="" width={50} height={50} />
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default MainMenuIcon;
