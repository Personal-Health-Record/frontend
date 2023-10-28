import { User } from '@/app/common/constants';
import Image from 'next/image';

interface Props {
  user: User;
}

const HeaderHome = ({ user }: Props) => {
  return (
    <div className="flex border-b-2 py-3 px-4 items-center gap-5">
      <Image src={user.profilePicture} alt="" width={50} height={50} />
      <h3 className="text-2xl font-bold text-mainGrey">Halo, {user.name}</h3>
    </div>
  );
};

export default HeaderHome;
