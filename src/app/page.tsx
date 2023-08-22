import BottomNavbar from "./components/BottomNavbar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Pengingat from "./components/Pengingat";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <Dashboard />
      <Pengingat />
      <MainMenu />
      <BottomNavbar />
    </main>
  );
}
