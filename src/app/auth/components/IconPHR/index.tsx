import Image from "next/image";

const IconPHR = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src="/images/app-icon.png" alt="" width={80} height={80} />
      <h3 className="font-bold text-4xl text-gray-600">PHR</h3>
    </div>
  );
};

export default IconPHR;
