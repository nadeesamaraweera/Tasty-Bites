import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
    query: string;
    setQuery: (value: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 query,
                                                 setQuery,
                                                 handleSubmit,
                                             }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto mb-10 px-4"
        >
            <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <Search size={20} />
        </span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base font-medium placeholder-gray-400 font-montserrat"
                />
            </div>

            <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition text-base font-montserrat"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
