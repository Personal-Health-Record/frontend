import Header from '@/app/components/Header';
import SearchBar from '../components/SearchBar';
import Title from '@/app/components/Title';
import CardObat from '../components/CardObat';
import CardRiwayat from '../components/CardRiwayat';

const RiwayatObat = () => {
  return (
    <div className="flex flex-col">
      <Header title="Riwayat Obat" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <SearchBar />

        <Title text="Tenaga Kesehatan Anda" />
        <CardRiwayat />

        <CardObat />
        <CardObat />
        <CardObat />
        <CardObat />
      </div>
    </div>
  );
};

export default RiwayatObat;
