import '../index.css'; // Or './main.css'
import React, { useState, useEffect } from 'react';
import { Play, Users, TrendingUp, Award, Star, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { FadeInNewSection } from '../Animation/NewAnimation';


function InfoSection() {
  return (
    <section className="py-20 md:px-8 px-6 ">
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='relative'>
            <img src={`${import.meta.env.BASE_URL}infopic.jpg`} alt="" className="rounded-2xl shadow-lg w-full"/>

          </div>
     
          <div>
            
          
            <h2 className='text-4xl font-bold text-blue-950 mb-5'>Built by Traders, for Traders</h2>
          
            <p className='text-gray-600 text-lg leading-relaxed mb-5'>
              Pinoys in Profit is a community built by traders, for traders. We've experienced the struggles that
              come with forex trading, and we've come together to create a place where traders can get the
              support, guidance, and knowledge they need to succeed.
              </p>
             <div className='grid md:grid-cols-1 gap-6 mb-8'>
               <FadeInNewSection delay={0.2}>
                 <div className='flex items-start space-x-4'>         
                   <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                   <div>                 
                     <h4 className='text-blue-950 mb-1 font-semibold'>Inclusive Community</h4>
                     <p className='text-gray-600'>We welcome traders from all levels and backgrounds, fostering a non-judgmental space where everyone can grow and succeed together.</p>
                   </div>  
                 </div>
               </FadeInNewSection>
             
               <FadeInNewSection delay={0.35}>
                 <div className='flex items-start space-x-4'>
                   <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                   <div>
                     <h4 className='text-blue-950 mb-1 font-semibold'>What We Stand For</h4>
                     <p className='text-gray-600'>Learning, growth, and emotional support are at the heart of what we do.</p>
                   </div>
                 </div>
               </FadeInNewSection>
             
               <FadeInNewSection delay={0.5}>
                 <div className='flex items-start space-x-4'>
                   <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                   <div>
                     <h4 className='text-blue-950 mb-1 font-semibold'>Expertise You Can Trust</h4>
                     <p className='text-gray-600'>Our experienced traders have been through the ups and downs of the forex market. You can rely on their proven strategies and insights.</p>
                   </div>
                 </div>
               </FadeInNewSection>
             </div>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;