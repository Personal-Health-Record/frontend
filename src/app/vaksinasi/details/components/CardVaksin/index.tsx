import Image from "next/image";

const CardVaksin = () => {
  return (
    <div className="flex flex-col gap-1 border-b-2 py-3 mb-20">
      <p className="text-sm">Sertifikasi Vaksinasi</p>
      <Image
        src="/images/sertifikat-vaksin.png"
        alt=""
        width={350}
        height={350}
      />
    </div>
  );
};

export default CardVaksin;
