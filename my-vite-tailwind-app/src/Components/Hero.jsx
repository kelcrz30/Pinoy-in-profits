import '../index.css'; // Or './main.css'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, Users, TrendingUp, Award, Star, CheckCircle, ArrowRight, Quote, X, Menu, Shield, Trophy, Target } from "lucide-react";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* Enhanced Logo - Simplified */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-950">Pinoys in Profit</div>
          </div>
          
          {/* Desktop Navigation - Simplified */}
          <nav className="hidden md:flex space-x-8 text-gray-600">
            <a className="hover:text-gray-900 transition-colors" href="#">
              Home
            </a>
            <a className="hover:text-gray-900 transition-colors" href="">
              About
            </a>
            <a className="hover:text-gray-900 transition-colors" href="">
              Course
            </a>
            <a className="hover:text-gray-900 transition-colors" href="">
              Contact us
            </a>
          </nav>
          
          {/* Desktop Join Button - Simplified */}
          <button className="hidden md:block bg-blue-950 hover:bg-blue-950/95 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Join Now
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href=""
                  className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href=""
                  className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Course
                </a>
                <a
                  href=""
                  className="block text-gray-600 hover:text-blue-950 py-3 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button className="w-full bg-gradient-to-r from-blue-950 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 mt-4">
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section - Cleaner Design */}
      <section className="pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="order-1 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-6 leading-tight">
                  Struggling with forex?
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-teal-600 mb-8 lg:mb-8 leading-tight">
                  Join a Community That Supports You.
                </h2>
                <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-8 leading-relaxed">
                  We're here to guide you through every challenge and help you grow
                  into a confident trader. Get the emotional and strategic support
                  you need to succeed.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-blue-950 hover:bg-blue-950/95 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium transition-colors inline-flex items-center shadow-lg">
                    Join our community today <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="order-2 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <img
                  src="/Pinoy-in-profits/hero.png"
                  alt="Forex trading community"
                  className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover shadow-lg"
                />
                {/* Overlay for better mobile appearance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:hidden"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-6 sm:py-8 bg-blue-950 border-t border-gray-200">
        <div
          onClick={() => setShowModal(true)}
          className="max-w-7xl mx-auto overflow-hidden shadow-lg cursor-pointer group relative rounded-lg"
        >
          <video
            src="/Pinoy-in-profits/pipshort.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover group-hover:brightness-75 duration-300"
          ></video>
          <div className="absolute inset-0 flex items-center justify-center text-white text-base sm:text-lg lg:text-xl font-semibold opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition bg-black/20 sm:bg-black/30">
            <div className="flex items-center gap-2">
              <Play size={20} className="sm:hidden" />
              Watch Full Video
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 lg:-top-16 lg:-right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-[9999] transition-all duration-300 hover:scale-110"
              >
                <X size={24} />
              </button>
              <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/HBQTQ_CTXtI?autoplay=1"
                  title="Pinoys in Profit Success Stories"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;