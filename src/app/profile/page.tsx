'use client';

import ProfileHeader from './components/ProfileHeader';
import ProfileOptionCard from './components/ProfileOptionCard';
import BottomNavbar from '../components/BottomNavbar';
import { getLoggedInUser, logoutUser } from '../common/userDataHelper';

const ProfilePage = () => {
  const { loggedInUser: user } = getLoggedInUser();

  if (!user) {
    return <div> Loading... </div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ProfileHeader user={user} />
        <div>
          <hr />
          <ProfileOptionCard title="Profil Saya" path="/profile/detail" />
          <ProfileOptionCard title="Anggota Keluarga" path="/profile/family" />
          <ProfileOptionCard
            title="Asuransi Kesehatan"
            path="/profile/insurance"
          />
          <ProfileOptionCard
            title="Logout"
            path="/auth"
            onClick={() => {
              logoutUser();
            }}
          />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default ProfilePage;
