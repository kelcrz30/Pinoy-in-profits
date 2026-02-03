import { useState } from 'react';
import { FadeInSection } from '../Animation/FadeInSection';
import CoachSection from '../Components/coachSection';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FadeInLeft, FadeInNewSection, FadeInRight, FadeInUp } from '../Animation/NewAnimation';
import { motion } from "framer-motion";
function About() {
    const [activeTab, setActiveTab] = useState('story');

    return (
            <main className="w-full scroll-smooth">
             
<section className="relative w-full h-[70vh] md:h-[80vh] bg-gray-900 overflow-hidden flex items-end">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={`${import.meta.env.BASE_URL}banner1.jpg`}
      alt="Pinoys in Profit Team Photo"
      className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-90"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
           
  {/* Content */}
  <div className="relative z-10 w-full mb-16 md:mb-24">
    <div className="max-w-7xl mx-auto px-6 text-white">
      <div className="max-w-4xl">
        
        {/* Title with Fade In Left */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl tracking-tight"
        >
          <span className="block ">Meet the faces behind the movement</span>
        </motion.h1>
        
        {/* Quote and Button with Fade In Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mt-6 md:mt-8">
            <p className="text-xl md:text-3xl lg:text-4xl max-w-3xl font-light italic drop-shadow-lg text-gray-200 leading-relaxed">
              "United by one mission — to empower every Filipino trader."
            </p>
          </div>
                   
          <div className='mt-7'>
            <Link to="/services#consultation" className="hidden lg:block">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold px-10 py-3 md:py-4 rounded-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
        
      </div>
    </div>
  </div>
</section>
       
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <FadeInSection>
                        <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From struggling traders to successful mentors - discover the story behind the Philippines' most trusted forex education community.
                        </p>
                        </FadeInSection>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-lg mb-16">
                            {[
                                { id: 'story', label: 'Our Story' },
                                { id: 'mission', label: 'Mission' },
                                { id: 'approach', label: 'Our Approach' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    aria-selected={activeTab === tab.id}
                                    className={`px-6 py-4 text-sm sm:px-5 rounded-xl sm:py-2.5 sm:text-base font-semibold rounded-lgtransition-all duration-300 focus:outline-none ${
                                        activeTab === tab.id
                                            ? 'bg-blue-600 text-white shadow-md scale-105'
                                            : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            {activeTab === 'story' && (
                                
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <FadeInNewSection>
                                    <p><span className="font-semibold text-gray-900">Pinoys in Profit</span> was born from a shared vision among Filipino traders who experienced the challenges of navigating forex markets alone.</p>
                                    <p>What started as informal mentoring among friends has grown into the Philippines' most trusted forex education community, offering structured, practical education and genuine support.</p>
                                    <p>Today, we proudly help thousands of Filipino traders transform their financial futures through discipline, strategy, and lifelong learning.</p>
                                    </FadeInNewSection>
                                </div>
                            )}

                            {activeTab === 'mission' && (

                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <FadeInLeft>
                                    <div className="border-l-4 border-blue-600 p-6 rounded-xl bg-white shadow-sm">
                                        <h3 className="font-bold text-gray-900 text-xl mb-3">Our Mission</h3>
                                        <p>To empower every Filipino trader with the knowledge, skills, and community needed to achieve consistent profitability and financial independence.</p>
                                    </div>
                                    </FadeInLeft>
                                    <FadeInRight>
                                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                                        <h3 className="font-bold text-gray-900 text-xl mb-3">Our Vision</h3>
                                        <p>To become the leading forex education community in the Philippines, creating a generation of traders who inspire excellence worldwide.</p>
                                    </div>
                                    </FadeInRight>
                                </div>
                            )}

                            {activeTab === 'approach' && (
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>Our unique approach combines <span className="font-semibold text-gray-900">proven strategies</span>, personal mentorship, and a strong community.</p>
                                    
                               <div className="space-y-4">
                                   {[
                                       ["Practical Learning", "Real market scenarios, not just theory"],
                                       ["Mentorship", "Direct access to experienced Filipino traders"],
                                       ["Community", "Supportive network that celebrates every win"]
                                   ].map(([title, desc], idx) => (
                                       <FadeInLeft key={idx} delay={idx * 0.2}>
                                           <div className="flex items-start space-x-3">
                                               <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                                               <p><strong>{title}:</strong> {desc}</p>
                                           </div>
                                       </FadeInLeft>
                                   ))}
                               </div>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <FadeInRight>
                                <img
                                    src={`${import.meta.env.BASE_URL}info2.jpg`}
                                    alt="Our Core Team"
                                    className="w-full h-96 object-cover"
                                />
                                </FadeInRight>
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CoachSection/>

            <section className="bg-gray-50">
                <div className=""></div>
                <div className="relative max-w-4xl mx-auto text-center px-6 py-20 text-black">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Trading?</h2>
                    <p className="text-xl text-black/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Join a growing community of successful Filipino traders who are transforming their financial futures. Start your journey toward consistent profitability today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="https://www.youtube.com/watch?v=PY8E9atq054" className="hidden lg:block">
                        <button className="bg-blue-950 text-white hover:bg-blue-950/95 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                            Join Our Community
                        </button>
                        </Link>

                    </div>
                    <div className="mt-8 text-blue-200 text-sm">
                    </div>
                </div>
                
            </section>
            <Footer/>
        </main>
    );
}

export default About;
