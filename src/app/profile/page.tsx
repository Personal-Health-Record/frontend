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

  const renderDoctorProfile = () => {
    return (
      <div>
        <hr />
        <ProfileOptionCard
          title="Profil Saya"
          path={'/profile/detail/' + user.id}
        />
        <ProfileOptionCard
          title="Ubah Password"
          path={'/profile/changepassword'}
        />
        <ProfileOptionCard
          title="Logout"
          path="/auth"
          onClick={() => {
            logoutUser();
          }}
        />
      </div>
    );
  };

  const renderPatientProfile = () => {
    return (
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
          title="Ubah Password"
          path={'/profile/changepassword'}
        />
        <ProfileOptionCard
          title="Logout"
          path="/auth"
          onClick={() => {
            logoutUser();
          }}
        />
      </div>
    );
  };

  // TODO: adjust kalo ini doctor, call component lain, terutama detailnya
  // TODO: buat ubah password mechanism
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <ProfileHeader user={user} />
        {user.role === 'doctor'
          ? renderDoctorProfile()
          : renderPatientProfile()}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default withAuth(ProfilePage);
