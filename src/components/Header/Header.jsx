import { Bell, Plus } from "lucide-react";
import avatar from "../../assets/avatar.png";
import { SearchInput } from "../";

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_3fr_3fr] items-center px-16 py-10 gap-8">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        <span className="text-cyan-400">Health</span>
        <span className="text-blue-900">care.</span>
      </div>

      {/* Search bar and Notification */}
      <div className="flex gap-4 justify-center">
        <SearchInput />
        <button className="h-10 w-10 border border-gray-100 hover:border-gray-200 cursor-pointer rounded-lg">
          <Bell className="w-5 h-5 text-[#3534aa] fill-[#3534aa] m-auto" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 justify-end">
        <div className="flex items-center justify-center h-10 w-10 bg-cyan-400 text-white rounded-lg hover:bg-cyan-300 cursor-pointer">
          <img src={avatar} alt="User Avatar" className="h-7" />
        </div>
        <button className="flex items-center justify-center h-10 w-10 bg-blue-900 text-white rounded-lg hover:bg-blue-800 cursor-pointer">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
