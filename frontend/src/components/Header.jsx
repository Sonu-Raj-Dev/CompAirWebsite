import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Aftermarket', path: '/aftermarket' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className={`font-bold text-2xl transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              CompAir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.path)
                    ? 'text-blue-600 font-semibold'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=\"md:hidden bg-white border-t shadow-lg\">\n          <div className=\"px-4 py-4 space-y-3\">\n            {navItems.map((item) => (\n              <Link\n                key={item.path}\n                to={item.path}\n                onClick={closeMobileMenu}\n                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${\n                  isActive(item.path)\n                    ? 'bg-blue-100 text-blue-600 font-semibold'\n                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'\n                }`}\n              >\n                {item.label}\n              </Link>\n            ))}\n            <Link to=\"/contact\" onClick={closeMobileMenu}>\n              <Button className=\"w-full bg-blue-600 hover:bg-blue-700 text-white\">\n                Get Quote\n              </Button>\n            </Link>\n          </div>\n        </div>\n      )}\n    </header>\n  );\n};
