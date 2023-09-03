import NewsCard from "./components/NewsCard";
import NewsTag from "./components/NewsTag"

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

      <div className="flex flex-row mt-8 px-8 gap-3 overflow-auto">
        <NewsTag tagName="semua" isActive />
        <NewsTag tagName="tips kesehatan" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
        <NewsTag tagName="penyakit kronis" />
      </div>

      <div className="mt-4">
        <NewsCard
          title="Hipertensi Penyebab Utama Penyakit Jantung, Gagal Ginjal, dan Stroke"
          description="Hipertensi atau tekanan darah tinggi, sering disebut sebagai “the silent killer” atau pembunuh diam-diam. Pasalnya, hipertensi tidak menimbulkan gejala yang khas sehingga sering tidak disadari oleh penderitanya. Padahal, hipertensi dapat menyebabkan berbagai komplikasi serius, seperti penyakit jantung, gagal ginjal, dan stroke."
          imageUrl="https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6" />
        <NewsCard
          title="Hipertensi Penyebab Utama Penyakit Jantung, Gagal Ginjal, dan Stroke"
          description="Hipertensi atau tekanan darah tinggi, sering disebut sebagai “the silent killer” atau pembunuh diam-diam. Pasalnya, hipertensi tidak menimbulkan gejala yang khas sehingga sering tidak disadari oleh penderitanya. Padahal, hipertensi dapat menyebabkan berbagai komplikasi serius, seperti penyakit jantung, gagal ginjal, dan stroke."
          imageUrl="https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6" />
        <NewsCard
          title="Hipertensi Penyebab Utama Penyakit Jantung, Gagal Ginjal, dan Stroke"
          description="Hipertensi atau tekanan darah tinggi, sering disebut sebagai “the silent killer” atau pembunuh diam-diam. Pasalnya, hipertensi tidak menimbulkan gejala yang khas sehingga sering tidak disadari oleh penderitanya. Padahal, hipertensi dapat menyebabkan berbagai komplikasi serius, seperti penyakit jantung, gagal ginjal, dan stroke."
          imageUrl="https://down-id.img.susercontent.com/file/9430b6db08b5ff5b343f91112f1716b6" />
      </div>
    </div >
  );
};

export default News;
