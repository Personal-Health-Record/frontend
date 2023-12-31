'use client';

import Header from '@/app/components/Header';
import { getLoggedInUser } from '@/app/common/userDataHelper';
import FamilyCard from '../components/FamilyCard';
import BottomNavbarOneButton from '../../components/BottomNavbarOneButton';

const FamilyPage = () => {
  const { loggedInUser: user, userData } = getLoggedInUser();

  if (!user || !userData) {
    return <div> Loading... </div>;
  }

  const userRelations = userData.filter((item) => item.parentId === user.id);

  return (
    <div className="flex flex-col">
      <Header title="Anggota Keluarga" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {userRelations.map((item, index) => (
          <FamilyCard key={index} user={item} />
        ))}
      </div>

      <BottomNavbarOneButton
        path="/profile/edit/family"
        iconPath="/images/plus.png"
        text="Tambahkan Anggota Keluarga"
      />
    </div>
  );
};

export default FamilyPage;
