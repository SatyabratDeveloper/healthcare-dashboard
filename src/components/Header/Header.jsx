import { Bell, Plus, Menu } from "lucide-react";
import avatar from "../../assets/avatar.png";
import { SearchInput } from "../";

const Header = () => {
  return (
    <header className="absolute grid lg:grid-cols-[4fr_11fr_10fr] grid-cols-[1fr_1fr] w-full items-center 2xl:px-12 xl:px-10 lg:px-8 md:px-4 px-3 2xl:py-8 xl:py-7 lg:py-5 md:py-4 py-3">
      {/* Logo */}
      <div className="md:text-2xl text-xl font-bold cursor-pointer">
        <span className="text-cyan-300">Health</span>
        <span className="text-indigo-900">care.</span>
      </div>

      {/* Search bar and Notification */}
      <div className="lg:flex hidden gap-4 items-center 2xl:ml-3 xl:ml-4 lg:ml-5">
        <SearchInput />
        <button className="h-10 w-10 border border-gray-200 hover:border-gray-300 cursor-pointer rounded-lg 2xl:mr-8 lg:mr-2">
          <Bell className="w-5 h-5 text-indigo-900 fill-indigo-900 m-auto" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex gap-4 justify-end w-full">
        <div className="flex items-center justify-center md:h-10 md:w-10 h-9 w-9 bg-cyan-300 text-white rounded-lg hover:bg-cyan-400 cursor-pointer">
          <img src={avatar} alt="User Avatar" className="md:h-7 h-6" />
        </div>
        <button className="flex items-center justify-center md:h-10 md:w-10 h-9 w-9 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 cursor-pointer">
          <Plus className="md:w-5 md:h-5 w-4 h-4" />
        </button>
        <button className="flex items-center justify-center md:h-10 md:w-10 h-9 w-9 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 cursor-pointer lg:hidden">
          <Menu className="md:w-5 md:h-5 w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
