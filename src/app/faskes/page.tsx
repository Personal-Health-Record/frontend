'use client';

import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';

const FaskesPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <p>Map</p>
      </div>
    </div>
  );
};

export default withAuth(FaskesPage);
