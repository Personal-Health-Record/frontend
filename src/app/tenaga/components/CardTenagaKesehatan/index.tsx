'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  location: string;
  specialist: string;
  image: string;
}

const CardTenagaKesehatan = ({ location, name, specialist, image }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/tenaga/profile');
  };

  return (
    <div
      className="flex shadow-md py-4 px-3 gap-3 rounded-lg justify-center"
      onClick={handleOnClick}
    >
      <div>
        <Image src={image} alt="" width={50} height={50} />
      </div>

      <div className="flex flex-col flex-1 justify-center gap-1">
        <div className="flex justify-between">
          <p className="text-sm">{name}</p>
          <p className="text-xs bg-superLightGrey py-1 px-3 rounded-xl">
            {location}
          </p>
        </div>

        <p className="text-sm text-mainGrey">{specialist}</p>
      </div>
    </div>
  );
};

export default CardTenagaKesehatan;
