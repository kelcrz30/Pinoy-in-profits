import React, { useState } from 'react';
import { Star, Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [page, setPage] = useState(0);
  const testimonialsPerPage = 4;

  const testimonials = [
    { id: 1, name: "Bernard", role: "Engineer", rating: 5, text: "Very Knowledgeable", videoId: "81SmGYkRoaQ" },
    { id: 2, name: "Rouel", role: "Surgeon", rating: 5, text: "I Highly recommend PIP", videoId: "joyPKqExMdE" },
    { id: 3, name: "Joel", role: "Business Owner", rating: 5, text: "Alam nila yung ginagawa nila", videoId: "95-AlM5afH8" },
    { id: 4, name: "Cecile", role: "Business Owner", rating: 5, text: "They Were able to Answer all the Questions of the Students", videoId: "fMOkClMMVYA" },
    { id: 5, name: "Jericson", role: "Business Owner", rating: 5, text: "First Time ko Magkaroon ng Coach Na Active Sa Community", videoId: "MNkwvDhnAsA?t=5" },
    { id: 6, name: "Victor", role: "Student", rating: 5, text: "Napaka Organize ng mga Coaches", videoId: "LZ45_7C-YJc" },
    { id: 7, name: "Jeford", role: "Real estate agent", rating: 5, text: "Very Helpful ang mga Trainings", videoId: "d2NUkigZ92Q" },
    { id: 8, name: "Christian", role: "Student", rating: 5, text: "Napaka Knowledgeable Mapa Fundamentals man o Technical Analysis", videoId: "LXiZnXoVvIM" },
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Here's what our clients have to say about their experience.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-6'
          >
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className='bg-white p-6 rounded-lg shadow-sm border min-h-[190px] max-h-[200px] flex flex-col justify-between overflow-hidden'>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-700 mb-4'>"{testimonial.text}"</p>
                <div className='flex justify-between'>
                  <div className='flex items-center'>
                    <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium mr-3'>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-900'>{testimonial.name}</h4>
                      <p className='text-gray-500 text-sm'>{testimonial.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveVideo(testimonial.videoId)}
                    className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800"
                  >
                    <Play className="w-4 h-4" />
                    Watch
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats section */}
        <div className="mt-16 text-center">
          <div className='grid grid-cols-3 gap-8'>
            <div>
              <div className='text-2xl font-bold text-blue-950'>50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-blue-950'>98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-blue-950'>5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for active video */}
      {activeVideo && (
        <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
          <div className='relative w-full max-w-4xl'>
            <button
              onClick={() => setActiveVideo(null)}
              className='absolute -top-8 right-0 text-white text-2xl'
            >
              x
            </button>
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-[60vh]"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
