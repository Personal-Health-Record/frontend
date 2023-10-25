'use client';

import BottomNavbar from '../components/BottomNavbar';
import { getLoggedInUser, logoutUser } from '../common/userDataHelper';
import withAuth from '../components/PrivateRoute';
import ProfileOptionCard from './components/ProfileOptionCard';
import ProfileHeader from './components/ProfileHeader';

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
          <ProfileOptionCard
            title="Profil Saya"
            path={'/profile/detail/' + user.id}
          />
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

export default withAuth(ProfilePage);
