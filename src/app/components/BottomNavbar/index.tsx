import Image from "next/image";
import { menuNavbar } from "./constants";
import { useRouter } from "next/navigation";

const BottomNavbar = () => {
  const router = useRouter();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 px-4 py-2 flex justify-between bg-white filter drop-shadow-sm"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.12))" }}
    >
      {menuNavbar.map((menu, index) => (
        <a
          href="#"
          className="flex flex-col text-white justify-center items-center gap-2"
          key={index}
          onClick={() => {
            router.push(menu.route);
          }}
        >
          <Image src={menu.icon} alt="" width={25} height={25} />
          <p className="text-xs text-mainGrey">{menu.title}</p>
        </a>
      ))}
    </div>
  );
};

export default BottomNavbar;
