'use client';

import { useMemo } from 'react';
import { getLoggedInUser } from './common/userDataHelper';
import BottomNavbar from './components/BottomNavbar';
import Dashboard from './components/Dashboard';
import HeaderHome from './components/HeaderHome';
import MainMenu from './components/MainMenu';
import Pengingat from './components/Pengingat';
import withAuth from './components/PrivateRoute';
import BottomNavbarDoctor from './components/BottomNavbarDoctor';
import HomeListPatient from './components/HomeListPatient';

const Home = () => {
  const { loggedInUser } = getLoggedInUser();

  const isDoctor = useMemo(() => {
    return loggedInUser?.role === 'doctor';
  }, [loggedInUser?.role]);

  console.log({ isDoctor });

  return (
    <main className="flex flex-col min-h-screen ">
      {isDoctor ? (
        <>
          <HeaderHome isDoctor />
          <HomeListPatient />
          <BottomNavbarDoctor />
        </>
      ) : (
        <>
          <HeaderHome isDoctor />
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
