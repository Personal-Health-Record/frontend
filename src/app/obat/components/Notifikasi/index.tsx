import Image from "next/image";

const Notifikasi = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-mainGrey pl-2 mb-3">
        Waktu Notifikasi
      </h3>

      <div className="flex w-full justify-between px-2 items-center">
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src="/images/pengingat/alarm.png"
              alt=""
              width={30}
              height={30}
            />
          </div>

          <p>09:00, 16:00</p>
        </div>

        <Image
          src="/images/pengingat/edit.png"
          alt=""
          width={30}
          height={30}
          className="self-end"
        />
      </div>
    </div>
  );
};

export default Notifikasi;
