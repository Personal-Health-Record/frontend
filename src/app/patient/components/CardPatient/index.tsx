import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  profilePicture: string;
  name: string;
  id: string;
}

const CardPatient = ({ name, profilePicture, id }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/patient/details/' + id);
  };

  return (
    <div className="flex gap-3" onClick={handleOnClick}>
      <div>
        <Image src={profilePicture} alt="menu" width={50} height={50} />
      </div>
      <div className="flex justify-between items-center w-full border-b-2 pb-3">
        <p className="text-xs">{name}</p>
        <div>
          <Image src="/images/arrow-right.png" alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default CardPatient;
