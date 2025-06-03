import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel'; // Make sure the path is correct

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

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

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className=" mx-auto">
  
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Here's what our clients have to say about their experience.</p>
        </div>

        {/* Carousel */}
        <TestimonialCarousel
          testimonials={testimonials}
          onVideoClick={setActiveVideo}
        />

        {/* Stats section */}

      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
          <div className='relative w-full max-w-4xl'>
            <button
              onClick={() => setActiveVideo(null)}
              className='absolute -top-8 right-0 text-white text-2xl'
            >
              ×
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
