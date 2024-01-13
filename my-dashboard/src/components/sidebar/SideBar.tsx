import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from 'react-icons/io5';
import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: " Main Panel",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Clien Side Counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generación Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={40} />,
    title: "Favorites",
    subTitle: "Global state",
  },
];
export const SideBar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="profile picture"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item, key) => (
            <SideBarMenuItem key={key} {...item} />
          ))
        }     
      </div>
    </div>
  );
};