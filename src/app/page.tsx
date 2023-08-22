import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Pengingat from "./components/Pengingat";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <Dashboard />
      <Pengingat />
      <div>Menu Utama</div>
    </main>
  );
}
