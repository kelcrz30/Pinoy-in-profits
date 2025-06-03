import '../index.css'; // Or './main.css'
import { Users, TrendingUp, Award, ArrowRight, Bot } from 'lucide-react';
import { FadeInSection } from "../Animation/FadeInSection";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function WhatyouGet() {

  return ( 
    <section className='pt-24 pb-16 px-6 bg-gray-50'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
              What You'll Get with
              <br />
              <span className="text-blue-950/95">
                Pinoys in Profit
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Being a part of Pinoys in Profit means gaining more than just forex knowledge. It's about having the emotional 
              and strategic support of a community that understands your struggles, while giving you the tools to succeed.
            </p>
          </FadeInSection>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
                  {[{
           icon: <Users className="text-blue-950" size={32} />,
           title: "Community & Accountability",
           desc: "Be part of an active Discord group with focused accountability channels"
        },
        {
          icon: <TrendingUp className="text-blue-950" size={32} />,
          title: "Forex Course",
          desc: "Learn the fundamentals of PIP in Forex — from basic concepts to advanced strategies, all in one place."
        },
        {
         icon: <Bot className="text-blue-950" size={32} />,
         title: "PIPBOT Automated Trading",
          desc: "Let PIPBOT trade for you with consistent, intelligent 24/5 market scanning"
          }].map(({icon, title, desc}, i) => (
            <FadeInSection key={title} delay={i * 0.2}>
              <div className='bg-white hover:bg-blue-950 rounded-2xl p-8 border border-gray-200 group flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl'>
                <div className='bg-gray-100  w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors'>
                  {icon}
                </div>
                {}
                <h3 className='text-2xl font-bold mb-4 group-hover:text-white '>{title}</h3>
                <p className='text-gray-600 group-hover:text-white mb-6 leading-relaxed flex-grow'>{desc}</p>


              <Link to="/services" className="text-gray-900 font-medium hover:text-gray-700 group-hover:text-white  flex items-center mt-auto cursor-pointer">
                Discover the Benefits <ArrowRight className="ml-2" size={16} />
              </Link>

              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatyouGet;
