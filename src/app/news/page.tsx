import BottomNavbar from "../components/BottomNavbar";
import NewsCard from "./components/NewsCard";
import NewsTag from "./components/NewsTag"
import { dummyNewsData } from "./constants";

const News = () => {
  return (
    <div className="flex flex-col h-screen" >
      <div className="mt-8">
        <div className="relative mt-4 px-8">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
            placeholder="Cari artikel kesehatan"
          />
        </div>
      </div>


      {/* TODO: add logic tentang ini */}
      <div className="flex flex-wrap mt-8 px-8 gap-3">
        <NewsTag tagName="semua" isActive />
        <NewsTag tagName="tips kesehatan" />
        <NewsTag tagName="penyakit kronis" />
      </div>

      <div className="mt-4">
        {
          dummyNewsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.descriptionPlaceholder}
              imageUrl={news.imageUrl}
              route={news.route} />
          ))
        }
      </div>
      <BottomNavbar />
    </div >
  );
};

export default News;
