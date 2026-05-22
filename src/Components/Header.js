import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Search Bar Row */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-brand-blue text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl bg-brand-blue text-white rounded p-1">🛍️</span>
            Brand
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:flex">
          <div className="flex w-full border-2 border-brand-blue rounded-md overflow-hidden">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 outline-none"
            />
            <select className="bg-gray-100 border-l border-gray-300 px-4 py-2 outline-none text-text-dark">
              <option>All category</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </select>
            <button className="bg-brand-blue text-white px-6 py-2 font-medium hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-text-gray">
          <Link to="/profile" className="flex flex-col items-center hover:text-brand-blue transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link to="/messages" className="flex flex-col items-center hover:text-brand-blue transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="text-xs mt-1">Message</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center hover:text-brand-blue transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <span className="text-xs mt-1">Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center hover:text-brand-blue transition">
            <div className="relative">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-3 h-3 flex items-center justify-center rounded-full">{cart.length}</span>}
            </div>
            <span className="text-xs mt-1">My cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Row */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between border-t border-gray-200 text-sm font-medium">
        <div className="flex items-center gap-6 text-text-dark">
          <button className="flex items-center gap-2 hover:text-brand-blue transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            All category
          </button>
          <Link to="/hot-offers" className="hover:text-brand-blue transition">Hot offers</Link>
          <Link to="/gift-boxes" className="hover:text-brand-blue transition">Gift boxes</Link>
          <Link to="/projects" className="hover:text-brand-blue transition">Projects</Link>
          <Link to="/menu-item" className="hover:text-brand-blue transition">Menu item</Link>
          <Link to="/help" className="hover:text-brand-blue transition">Help</Link>
        </div>
        <div className="flex items-center gap-4 text-text-dark">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>English, USD</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Ship to 🇩🇪</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
