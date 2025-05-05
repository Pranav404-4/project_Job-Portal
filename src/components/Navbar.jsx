import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';

export const Navbar = ({ setSearchQuery }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQueryState] = useState('');
  const location = useLocation();
  const isJobDetailsPage = location.pathname.startsWith('/job-details/');
  const isPlansPage = location.pathname === '/plans'; 

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth') === 'true';
    setIsAuthenticated(isAuth);

    if (isAuth) {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || 'User');
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <div className="flex items-center space-x-6 pl-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/plans" className="hover:text-blue-500">Plans</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {!isJobDetailsPage && !isPlansPage && (
        <form onSubmit={handleSearch} className="flex-grow max-w-xl mx-6">
          <div className="flex items-center space-x-2">
            <input
              type="text" 
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQueryState(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Search
            </button>
          </div>
        </form>
        )}

        <div className="relative pr-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Hi, {username}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center"
              >
                <i className="fas fa-user text-lg"></i>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg">
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Login</Link>
                  <Link to="/register" className="block px-4 py-2 hover:bg-gray-700">Register</Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
