import Header from '../components/Header';
import Title from '../components/Title';
import ButtonSection from './components/ButtonSection';
import CardTenkes from './components/CardTenkes';
import SearchBar from './components/SearchBar';
import { dataTenagaKesehatan } from './constants';

const SharePage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Bagikan ke" />

      <div className="flex flex-col py-3 px-4 pt-6 gap-4">
        <SearchBar />
        <Title text="Tenaga Kesehatan Anda" />

        {dataTenagaKesehatan.map((tenkes, index) => (
          <CardTenkes
            key={index}
            image={tenkes.image}
            location={tenkes.location}
            name={tenkes.name}
            specialist={tenkes.specialist}
          />
        ))}

        <ButtonSection />
      </div>
    </div>
  );
};

export default SharePage;
