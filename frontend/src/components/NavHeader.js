import React, { useContext } from 'react';
import {
  MoonIcon,
  SunIcon,
} from '../icons';
import { WindmillContext } from '@windmill/react-ui';
import logo from '../assets/img/logo.png';

import { Link } from 'react-router-dom';

function NavHeader() {
  const { mode, toggleMode } = useContext(WindmillContext);

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-15 h-12"
        />

        {/* Navigation */}
        <nav className="flex items-center space-x-6 mr-auto">
          <button className="text-sm font-semibold" aria-label="Home">
            Home
          </button>
          <button className="text-sm font-semibold" aria-label="Support">
            Support
          </button>
          <button className="text-sm font-semibold" aria-label="Tutorial">
            Tutorial
          </button>
          <button className="text-sm font-semibold" aria-label="New Feeds">
            New Feeds
          </button>
        </nav>

        {/* Theme toggler and Sign In/Register */}
        <div className="flex items-center space-x-6">
          <button
            className="rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={toggleMode}
            aria-label="Toggle color mode"
          >
            {mode === 'dark' ? (
              <SunIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <MoonIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>

         {/* Link đến trang đăng nhập */}
            <Link to="/login" className="text-sm font-semibold" aria-label="Sign In">
                Sign In
            </Link>
          
            <Link to="/create-account" className="text-sm font-semibold" aria-label="Sign In">
                Register
            </Link>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
