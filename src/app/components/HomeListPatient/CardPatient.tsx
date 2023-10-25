import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  profileIcon: string;
  id: string;
}

const CardPatient = ({ name, profileIcon, id }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/patient/details/' + id);
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-24 h-24 shadow-md rounded-lg gap-3"
      onClick={handleOnClick}
    >
      <Image src={profileIcon} alt="patient" width={40} height={40} />
      <p className="text-xs text-mainGrey">{name}</p>
    </div>
  );
};

export default CardPatient;
