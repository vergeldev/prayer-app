import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/users?email=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full py-3 pl-4 pr-12 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <button
          onClick={handleSearch}
          className="absolute top-0 right-0 px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {searchResults.map((user) => (
          <li
            key={user._id}
            className="flex items-center px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow-md"
          >
            <span className="mr-2">{user.name}</span>
            <span className="text-xs text-gray-500">(Add as friend)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
