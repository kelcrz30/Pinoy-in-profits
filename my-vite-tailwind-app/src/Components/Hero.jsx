import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Users, TrendingUp, Award, Star, CheckCircle, ArrowRight, Quote, X, Menu } from "lucide-react";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-950">Pinoys in Profit</div>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop Join Button */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#"
                className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href=""
                className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href=""
                className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Course
              </a>
              <a
                href=""
                className="block text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </a>
              <button className="w-full bg-blue-950 hover:bg-blue-950/95 text-white px-6 py-3 rounded-lg font-medium transition-colors mt-4">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <section className="pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Struggling with forex?
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-teal-600 mb-8 leading-tight">
                Join a Community That Supports You.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We're here to guide you through every challenge and help you grow
                into a confident trader. Get the emotional and strategic support
                you need to succeed.
              </p>
              <button className="bg-blue-950 hover:bg-blue-950/95 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center shadow-lg">
                Join our community today <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <img
                  src="./hero.jpg"
                  alt=""
                  className="rounded-2xl w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 bg-blue-950 border-t border-gray-200">
        <div
          onClick={() => setShowModal(true)}
          className="max-w-7xl mx-auto overflow-hidden shadow-lg border-gray-300 cursor-pointer group relative"
        >
          <video
            src="./pipshort.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[450px] object-cover group-hover:brightness-75 duration-300"
          ></video>
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
            Watch Full Video
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 z-[9999]"
            >
              <X size={28} />
            </button>
                 <iframe
                   width="100%"
                   height="500"
                   src="https://www.youtube.com/embed/HBQTQ_CTXtI"
                   title="YouTube video player"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   className="rounded-lg"
                 />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;