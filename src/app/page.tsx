import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <Dashboard />
      <div>Pengingat Obat</div>
      <div>Menu Utama</div>
    </main>
  );
}
