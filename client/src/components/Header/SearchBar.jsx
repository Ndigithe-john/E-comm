import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchBar = () => {
  return (
    <div className="relative hidden w-full lg:block">
      <MagnifyingGlassIcon className="absolute top-3 left-3 h-4 w-4 text-slate-400" />
      <input
        type="search"
        placeholder="what are you looking for?"
        className="h-10 w-full rounded-lg bg-slate-200 px-4 pl-10 text-sm outline-slate-600 placehoder:text-slate-600"
      />
    </div>
  );
};

export default SearchBar;
