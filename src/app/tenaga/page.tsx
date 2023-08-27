import Header from "../components/Header";
import CardTenagaKesehatan from "./components/CardTenagaKesehatan";
import SearchBar from "./components/SearchBar";
import { dataTenagaKesehatan } from "./constants";

const TenagaMedisPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Tenaga Kesehatan" />

      <div className="flex flex-col py-3 px-4 gap-6 pt-6">
        <SearchBar />
        {dataTenagaKesehatan.map((docter) => (
          <CardTenagaKesehatan
            image={docter.image}
            location={docter.location}
            name={docter.name}
            specialist={docter.specialist}
          />
        ))}
      </div>
    </div>
  );
};

export default TenagaMedisPage;