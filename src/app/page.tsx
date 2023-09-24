"use client";

import BottomNavbar from "./components/BottomNavbar";
import Dashboard from "./components/Dashboard";
import HeaderHome from "./components/HeaderHome";
import MainMenu from "./components/MainMenu";
import Pengingat from "./components/Pengingat";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const authUserEmail = localStorage.getItem("authUserEmail");
    if (!authUserEmail) {
      router.push("/auth");
    }
  }

  return (
    <main className="flex flex-col min-h-screen ">
      <HeaderHome />
      <Dashboard />
      <Pengingat />
      <MainMenu />
      <BottomNavbar />
    </main>
  );
}
