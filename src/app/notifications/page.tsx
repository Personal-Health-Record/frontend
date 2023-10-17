'use client';
import BottomNavbar from '../components/BottomNavbar';
import withAuth from '../components/PrivateRoute';
import CardNotification from './components/CardNotification';
import SearchBar from './components/Searchbar';

const NotificationPage = () => {
  const handleSearch = (keyword: string) => {
    console.log(keyword);
  };

  return (
    <div className="flex flex-col px-4">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col mt-10 gap-7">
        <CardNotification
          title="Pengingat Obat"
          date="10 April"
          description="Anda belum meminum obat pada pukul 14:00"
        />
        <CardNotification
          title="Rumah sakit"
          date="12 April"
          description="Rumah sakit tujukan terdekat sudah beroperasi"
        />
        <CardNotification
          title="Pesan"
          date="9April"
          description="Anda menerima pesan dari dokter"
        />
        <CardNotification
          title="Pengingat Obat"
          date="8 April"
          description="Anda belum meminum obat pada pukul 14:00"
        />
        <CardNotification
          title="Pengingat Obat"
          date="7 April"
          description="Anda belum meminum obat pada pukul 14:00"
        />
      </div>

      <BottomNavbar />
    </div>
  );
};

export default withAuth(NotificationPage);
