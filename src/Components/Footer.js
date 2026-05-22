import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-10 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-xl font-bold text-text-dark mb-2">Subscribe on our newsletter</h3>
        <p className="text-text-gray mb-6 text-sm">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex w-full max-w-md gap-2">
          <div className="relative flex-1">
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded outline-none focus:border-brand-blue"
            />
          </div>
          <button className="bg-brand-blue text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-brand-blue text-3xl font-bold flex items-center gap-2 mb-4">
              <span className="text-4xl bg-brand-blue text-white rounded p-1">🛍️</span>
              Brand
            </Link>
            <p className="text-text-gray text-sm mb-6 leading-relaxed pr-8">
              Best information about the company gies here but now lorem ipsum is
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">fb</div>
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">tw</div>
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">in</div>
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">yt</div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-text-dark mb-4">About</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-gray">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/find-store">Find store</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">Partnership</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-gray">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/find-store">Find store</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">Information</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-gray">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/refund">Money Refund</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">For users</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-gray">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/orders">My Orders</Link></li>
            </ul>
          </div>

          {/* App Download */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-text-dark mb-4">Get app</h4>
            <div className="flex flex-col gap-2">
              <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
                🍏 App Store
              </button>
              <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
                ▶️ Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-4 border-t border-gray-200 text-sm text-text-gray">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>© 2023 Ecommerce.</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-lg">🇺🇸</span>
            <span>English</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
