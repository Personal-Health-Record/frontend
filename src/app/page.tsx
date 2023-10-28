'use client';

import { useMemo } from 'react';
import { getLoggedInUser } from './common/userDataHelper';
import BottomNavbar from './components/BottomNavbar';
import Dashboard from './components/Dashboard';
import HeaderHome from './components/HeaderHome';
import MainMenu from './components/MainMenu';
import Pengingat from './components/Pengingat';
import withAuth from './components/PrivateRoute';
import HomeListPatient from './components/HomeListPatient';
import DoctorMenu from './components/DoctorMenu';

const Home = () => {
  const { loggedInUser } = getLoggedInUser();

  const isDoctor = useMemo(() => {
    return loggedInUser?.role === 'doctor';
  }, [loggedInUser?.role]);

  if (!loggedInUser) {
    return <div> Loading... </div>;
  }

  return (
    <main className="flex flex-col min-h-screen ">
      {isDoctor ? (
        <>
          <HeaderHome user={loggedInUser} />
          <HomeListPatient />
          <DoctorMenu />
          <BottomNavbar />
        </>
      ) : (
        <>
          <HeaderHome user={loggedInUser} />
          <Dashboard />
          <Pengingat />
          <MainMenu />
          <BottomNavbar />
        </>
      )}
    </main>
  );
};

export default withAuth(Home);
