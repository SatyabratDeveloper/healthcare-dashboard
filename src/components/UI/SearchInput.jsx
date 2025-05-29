import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
        <Search className="text-indigo-900 w-5 h-5" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="h-10 w-full pl-16 pr-4 text-sm border border-gray-200 hover:border-gray-300 rounded-lg placeholder-gray-300 placeholder:font-medium outline-none"
      />
    </div>
  );
};

export default SearchInput;
