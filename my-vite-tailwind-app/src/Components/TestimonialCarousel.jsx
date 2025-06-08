import React, { useState, useRef, useEffect } from 'react';
import { Star, Play } from 'lucide-react';

const TestimonialCarousel = ({ testimonials = [], onVideoClick,  }) => {
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const x = useRef(0);
  const startX = useRef(0);

  const duplicated = [...testimonials, ...testimonials];

  useEffect(() => {
    const animate = () => {
      if (!paused && !isDragging) {
        x.current -= 2;
        const container = containerRef.current;
        if (container) {
          const scrollWidth = container.scrollWidth / 2;
          if (-x.current >= scrollWidth) {
            x.current = 0;
          }
          container.style.transform = `translateX(${x.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [paused, isDragging]);

  // Drag handlers
  const handlePointerDown = (e) => {
    setPaused(true);
    setIsDragging(true);
    startX.current = e.clientX || e.touches?.[0].clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0].clientX;
    const dx = currentX - startX.current;
    startX.current = currentX;
    x.current += dx;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setPaused(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden py-10 mb-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      id='testimonial'
    >
      <div
        ref={containerRef}
        className="flex gap-6 w-max cursor-grab select-none"
      >
        {duplicated.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white min-w-[300px] max-w-[300px] h-[220px] p-4 rounded-lg shadow border flex flex-col justify-between"
          >
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-2">"{testimonial.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-blue-500 rounded-full text-white flex items-center justify-center mr-2">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <button
                onClick={() => onVideoClick(testimonial.videoId)}
                className="flex items-center gap-1 bg-gray-900 text-white px-4 py-3 text-xs rounded-full hover:bg-gray-800"
              >
                <Play className="w-3 h-3" /> Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
