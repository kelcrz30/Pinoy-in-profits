import '../index.css'; // Or './main.css'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, Users, TrendingUp, Award, Star, CheckCircle, ArrowRight, Quote, X, Menu, Shield, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

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
      {/* Hero Section - Cleaner Design */}
      <section className=" sm:mt-30 px-6 ">
        <div className=" md:max-w-3xl lg:max-w-7xl max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 mb-20 gap-8 lg:gap-16 items-center ">
            {/* Text Content */}
            <motion.div
              className="order-1 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="px-6 mt-20  text-center md:text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h1 className="text-4xl text-center md:text-center lg:text-left sm:text-4xl lg:text-4xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  Struggling with forex?
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-light text-teal-600 mb-6 lg:mb-8 leading-tight">
                  Join a Community That Supports You.
                </h2>
                <p className="text-base lg:text-base xl:text-lg text-gray-600 mb-8 lg:mb-8 leading-relaxed">
                  We're here to guide you through every challenge and help you grow
                  into a confident trader. Get the emotional and strategic support
                  you need to succeed.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-blue-950 hover:bg-blue-950/95 text-white px-6 lg:px-6 xl:px-8 py-3 lg:py-3 xl:py-4 rounded-full font-medium transition-colors inline-flex items-center shadow-lg text-sm lg:text-sm xl:text-base">
                    Join our community today <ArrowRight className="ml-2" size={18} />
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
              <div className="relative mt-20 ">
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

  <section className="relative w-full h-[60vh] overflow-hidden group">
      {/* Background Video */}
      <video
        src="/Pinoy-in-profits/pipshort.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">


        {/* Hidden by default, shown on hover via `group-hover` */}
        <button
          onClick={() => setShowModal(true)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white/85 text-black px-6 py-3 rounded-full font-semibol"
        >
          <Play size={20} />
          Watch Full Video
        </button>
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
                className="absolute mb-20 -top-12 right-0 lg:-top-16 lg:-right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-[9999] transition-all duration-300 hover:scale-110"
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