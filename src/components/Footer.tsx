
import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hill Scholars</h3>
                <p className="text-gray-400">Educational Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students to achieve their best SAT scores through personalized tutoring, 
              comprehensive practice materials, and expert guidance.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>szhang@hillscholars.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(617) 819-5809</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Brookline, MA 02445</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/practice" className="hover:text-white transition-colors">SAT Practice</a></li>
              <li><a href="/schedule" className="hover:text-white transition-colors">Schedule Session</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="hover:text-white transition-colors">1-on-1 Tutoring</span></li>
              <li><span className="hover:text-white transition-colors">SAT Math</span></li>
              <li><span className="hover:text-white transition-colors">SAT Reading</span></li>
              <li><span className="hover:text-white transition-colors">Practice Tests</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hill Scholars Educational Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
