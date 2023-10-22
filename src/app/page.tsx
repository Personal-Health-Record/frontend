'use client';

import BottomNavbar from './components/BottomNavbar';
import Dashboard from './components/Dashboard';
import HeaderHome from './components/HeaderHome';
import MainMenu from './components/MainMenu';
import Pengingat from './components/Pengingat';
import withAuth from './components/PrivateRoute';

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen ">
      <HeaderHome />
      <Dashboard />
      <Pengingat />
      <MainMenu />
      <BottomNavbar />
    </main>
  );
};

export default withAuth(Home);
