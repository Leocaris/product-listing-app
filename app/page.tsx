'use client';

import React from 'react';
import { useState, useEffect } from 'react';

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Apple iPhone 16 128 GB',
    price: 800,
    image: 'https://images.apple.com/v/iphone-16/a/images/overview/hero/hero_static__xyz.jpg',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Apple iPhone 16 Pro 512 GB',
    price: 1230,
    image: 'https://images.apple.com/v/iphone-16-pro/a/images/overview/hero/hero_static__abc.jpg',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Apple iPhone 15 128 GB',
    price: 725,
    image: 'https://images.apple.com/v/iphone-15/a/images/overview/hero/hero_static__def.jpg',
    rating: 4.7,
    reviews: 256
  },
  {
    id: 4,
    name: 'Apple iPhone 15 Pro 512 GB',
    price: 800,
    image: 'https://images.apple.com/v/iphone-15-pro/a/images/overview/hero/hero_static__ghi.jpg',
    rating: 4.8,
    reviews: 178
  },
  {
    id: 5,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s928bzkginu/gallery/in-galaxy-s24-ultra-5g-sm-s928bzkginu-thumb-539302504',
    rating: 4.6,
    reviews: 95
  },
  {
    id: 6,
    name: 'Google Pixel 8 Pro',
    price: 999,
    image: 'https://store.google.com/product/images/og_pixel_8_pro.jpg',
    rating: 4.5,
    reviews: 67
  },
  {
    id: 7,
    name: 'OnePlus 12',
    price: 799,
    image: 'https://image01.oneplus.net/ebp/202401/04/1-m00-0f-92-cpgm7gsybt6aa5jlaaaaakevs8e182_840_840.png',
    rating: 4.4,
    reviews: 43
  },
  {
    id: 8,
    name: 'Xiaomi 14 Ultra',
    price: 899,
    image: 'https://i01.appmifile.com/webfile/globalimg/in/cms/58B33CD5-9C97-2A09-0A2C-EA232867C8ED.jpg',
    rating: 4.3,
    reviews: 32
  }
];


// Theme Toggle Component
const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        isDark ? 'bg-indigo-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
      <span className="absolute left-1 text-xs">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

// Product Card Component
const ProductCard = ({ product, onViewDetails, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl hover:shadow-indigo-500/25' 
          : 'bg-white shadow-lg hover:shadow-2xl hover:shadow-indigo-500/25'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark 
          ? 'bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20' 
          : 'bg-gradient-to-r from-indigo-100/50 via-purple-100/50 to-pink-100/50'
      }`} />
      
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div className={`w-full h-64 flex items-center justify-center transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
            : 'bg-gradient-to-br from-gray-100 to-gray-200'
        } ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <img
  src={product.image}
  alt={product.name}
  className={`h-full object-contain transition-all duration-500 ${
    isHovered ? 'rotate-6 scale-110' : 'scale-100'
  }`}
/>

        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
                isDark ? 'bg-indigo-400' : 'bg-indigo-500'
              } ${
                isHovered 
                  ? 'opacity-100 animate-pulse' 
                  : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Heart icon */}
        <button className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
          isDark 
            ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-red-400' 
            : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
        } transform hover:scale-110`}>
          <svg className="w-5 h-5 transition-transform duration-300 hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Animated border */}
        <div className={`absolute inset-0 rounded-t-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
            <div className={`h-full w-full rounded-t-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`} />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="relative p-6 z-10">
        <h3 className={`font-bold text-lg mb-3 line-clamp-2 transition-colors duration-300 ${
          isDark 
            ? 'text-white group-hover:text-indigo-300' 
            : 'text-gray-800 group-hover:text-indigo-600'
        }`}>
          {product.name}
        </h3>
        
        {/* Rating with animated stars */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 transition-all duration-300 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 scale-100' 
                    : isDark ? 'text-gray-600 scale-90' : 'text-gray-300 scale-90'
                } ${isHovered && i < Math.floor(product.rating) ? 'animate-pulse scale-110' : ''}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className={`text-sm ml-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ({product.reviews})
          </span>
        </div>

        {/* Price with gradient */}
        <div className="flex items-center justify-between mb-6">
          <span className={`text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={() => onViewDetails(product.id)}
            className={`flex-1 relative overflow-hidden rounded-xl py-3 px-4 font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/50' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-500/50'
            }`}
          >
            <span className="relative z-10">Add to Cart</span>
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } bg-gradient-to-r from-white/20 to-transparent`} />
          </button>
          
          <button className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
            isDark 
              ? 'border border-gray-600 hover:border-indigo-500 hover:bg-indigo-500/10 text-gray-300 hover:text-indigo-400' 
              : 'border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Filter Component
const FilterSection = ({ sortBy, setSortBy, searchTerm, setSearchTerm, isDark }) => {
  return (
    <div className={`mb-8 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/50 border border-gray-700' 
        : 'bg-white/70 shadow-lg border border-gray-200'
    }`}>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <svg className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-4">
          <label className={`text-sm font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Main Products Page Component
const ProductsPage = () => {
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleViewDetails = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Prevent hydration mismatch by only rendering after client-side hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse ${
          isDark ? 'bg-indigo-500' : 'bg-indigo-300'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 animate-pulse ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className={`backdrop-blur-sm transition-all duration-300 ${
        isDark 
          ? 'bg-gray-900/80 border-b border-gray-700' 
          : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                🔌 PLUGO
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <button className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/10' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
                Cart
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className={`flex items-center text-sm mb-6 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span>🏠 Home</span>
          <span className="mx-2">›</span>
          <span>Smartphones</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h2 className={`text-4xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Smartphones
          </h2>
          <p className={`text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {filteredAndSortedProducts.length} Results found
          </p>
        </div>

        {/* Filters */}
        <FilterSection 
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDark={isDark}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                onViewDetails={handleViewDetails}
                isDark={isDark}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 animate-bounce">📱</div>
            <h3 className={`text-2xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              No products found
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className={`rounded-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-white border border-gray-200'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Product Details
              </h3>
              <button 
                onClick={handleCloseModal}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                ✕
              </button>
            </div>
            
            <div className="text-center">
              <div className={`w-40 h-40 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <span className="text-6xl animate-pulse">📱</span>
              </div>
              
              <h4 className={`font-bold text-xl mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedProduct.name}
              </h4>
              
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
                ${selectedProduct.price}
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  ({selectedProduct.reviews} reviews)
                </span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;