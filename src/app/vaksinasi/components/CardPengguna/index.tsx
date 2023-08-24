import Image from "next/image";

interface Props {
  title: string;
  value: string;
}

const CardPengguna = ({ title, value }: Props) => {
  return (
    <div className="flex border-b-2 py-2 items-center justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-mainGrey">{value}</p>
      </div>

      <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
    </div>
  );
};

export default CardPengguna;
