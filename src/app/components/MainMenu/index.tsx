import MainMenuIcon from "./MainMenuIcon";
import { menuList } from "./constants";

const MainMenu = () => {
  return (
    <div className="flex flex-col p-4 gap-5 mb-12">
      <h3>Menu Utama</h3>

      <div className="flex justify-between flex-wrap">
        {menuList.map((menu) => (
          <MainMenuIcon icon={menu.icon} title={menu.title} />
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
