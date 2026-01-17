import { Search, Plus } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}

const SearchBar = ({ searchTerm, onSearchChange, onAddClick }: SearchBarProps) => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-12 w-full rounded-lg border border-gray-700 bg-gray-800/50 pl-10 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
      </div>
      <button
        onClick={onAddClick}
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white transition-all hover:bg-orange-600 hover:scale-105 active:scale-95"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchBar;