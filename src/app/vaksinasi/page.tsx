'use client';

import Header from '@/app/components/Header';
import CardPengguna from './components/CardPengguna';
import VaksinasiList from './components/VaksinasiList';
import Keterangan from './components/Keterangan';
import { useState } from 'react';
import { getLoggedInUser } from '../common/userDataHelper';
import { User } from '../common/constants';
import withAuth from '../components/PrivateRoute';

const VaksinasiPribadi = () => {
  const { loggedInUser, userData } = getLoggedInUser();
  const [user, setUser] = useState<User>();

  if (!loggedInUser || !userData) {
    return <div> Loading... </div>;
  }

  // populate user if not exist
  if (loggedInUser && !user) {
    setUser(loggedInUser);
  }

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-6">
        <CardPengguna user={user!} setUser={setUser} userData={userData} />

        <VaksinasiList user={user!} />
        <Keterangan />
      </div>
    </div>
  );
};

export default withAuth(VaksinasiPribadi);
