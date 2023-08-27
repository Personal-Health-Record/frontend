import Header from "@/app/components/Header";
import Image from "next/image";

const PemesananObatPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Kirim Pesan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <p className="text-mainGrey text-sm text-justify">
          Pemesanan obat dapat dilakukan dengan aplikasi telekonsultasi di luar
          aplikasi PHR.
        </p>

        <div className="flex flex-wrap justify-center">
          <Image
            src="/images/pesan/halodoc.png"
            alt=""
            width={160}
            height={160}
          />
          <Image
            src="/images/pesan/alodokter.png"
            alt=""
            width={160}
            height={160}
          />
          <Image
            src="/images/pesan/klikdokter-2.png"
            alt=""
            width={160}
            height={160}
          />
          <Image
            src="/images/pesan/sehatq.png"
            alt=""
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default PemesananObatPage;
