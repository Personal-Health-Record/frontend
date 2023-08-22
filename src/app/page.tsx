import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <div>Dashboard Kesehatan</div>
      <div>Pengingat Obat</div>
      <div>Menu Utama</div>
    </main>
  );
}
