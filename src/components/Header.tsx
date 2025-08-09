import React, { useState } from 'react';
import { Menu, X, User, Calendar, BookOpen, Home, Info, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/',
    icon: Home
  }, {
    name: 'About',
    href: '/about',
    icon: Info
  }, {
    name: 'SAT Practice',
    href: '/practice',
    icon: BookOpen
  }, {
    name: 'Schedule',
    href: '/schedule',
    icon: Calendar
  }, {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-white shadow-lg border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3ebe132c-5c91-4261-a5bf-c705e4ca1ba4.png" 
              alt="Hill Scholars" 
              className="h-72 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>)}
          </nav>


          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>)}
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;