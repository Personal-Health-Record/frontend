import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

const ScreeningKesehatanMandiriCard = ({ image, title }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Image src={image} alt="" width={50} height={50} />
      </div>

      <div className="flex items-center justify-between text-start w-full border-b-2">
        <p className="text-xs py-5">{title}</p>
        <Image src="/images/arrow-right.png" alt="" width={25} height={20} />
      </div>
    </div>
  );
};

export default ScreeningKesehatanMandiriCard;
