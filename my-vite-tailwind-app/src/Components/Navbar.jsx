// Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation()
  const currentPath = location.pathname

  const linkClass = (path) => 
    `px-4 py-2 border-b-2 ${
    currentPath === path 
    ? "text-blue-600 border-blue-600 font-bold"
    : "text-gray-600 border-transparent hover:text-blue-500"
  }`

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={`${import.meta.env.BASE_URL}newlog.png`}
            alt=""
            className="w-12 md:w-14 lg:w-16 m-0"
          />
          <Link to="/" >
          <div className="text-2xl font-bold text-blue-950">Pinoys in Profit</div>
          </Link>
        </div>
        

       <nav className="hidden lg:flex space-x-8 text-gray-600">
         <Link to="/" className={linkClass("/")}>
           Home
         </Link>
         <Link to="/about" className={linkClass("/about")}>
           About
         </Link>
         <Link to="/services" className={linkClass("/services")}>
           Services
         </Link>
         <Link to="/contact" className={linkClass("/contact")}>
           Contact us
         </Link>
       </nav>
       
       <Link to="https://www.youtube.com/watch?v=PY8E9atq054" className="hidden lg:block">
         <button className="bg-blue-950  hover:bg-blue-950/95 text-white px-6 py-3 rounded-full font-semibold transition-colors">
           Join now
         </button>
       </Link>


        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Course
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/services#consultation">
              <button className="w-full bg-gradient-to-r from-blue-950 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4">
                Join Now
              </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
