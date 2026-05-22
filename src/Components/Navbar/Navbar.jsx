import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            {/* Logo Picture */}
            <div className="flex items-center gap-2">
                {/* Add your logo image here by changing the src attribute */}
                <img 
                    src="/assets/Layout/Brand/logo-colored.png"
                    alt="Logo" 
                    className="w-10 h-10 object-contain" 
                />
                <h1 className="text-xl font-bold">ShopZone</h1>
            </div>

            <div className="flex gap-6 text-sm text-gray-300 items-center">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/products" className="hover:text-white">Products</a>
                <a href="/cart" className="hover:text-white">Cart</a>
                
                {/* Profile Picture */}
                <a href="/profile">
                    {/* Add your profile image here */}
                    <img 
                        src="https://via.placeholder.com/32" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full border border-gray-500 hover:border-white transition cursor-pointer" 
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar