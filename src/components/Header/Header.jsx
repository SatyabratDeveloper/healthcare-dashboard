import { Bell, Plus } from "lucide-react";
import avatar from "../../assets/avatar.png";
import { SearchInput } from "../";

const Header = () => {
  return (
    <header className="absolute grid grid-cols-[1fr_3fr_3.5fr] w-full items-center px-16 py-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900 cursor-pointer">
        <span className="text-cyan-300">Health</span>
        <span className="text-indigo-900">care.</span>
      </div>

      {/* Search bar and Notification */}
      <div className="flex gap-4 justify-center items-center w-2xl">
        <SearchInput />
        <button className="h-10 w-10 border border-gray-200 hover:border-gray-300 cursor-pointer rounded-lg">
          <Bell className="w-5 h-5 text-indigo-900 fill-indigo-900 m-auto" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 justify-end">
        <div className="flex items-center justify-center h-10 w-10 bg-cyan-300 text-white rounded-lg hover:bg-cyan-400 cursor-pointer">
          <img src={avatar} alt="User Avatar" className="h-7" />
        </div>
        <button className="flex items-center justify-center h-10 w-10 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 cursor-pointer">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
