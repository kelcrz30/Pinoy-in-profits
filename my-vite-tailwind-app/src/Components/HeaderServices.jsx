import React from 'react';

import { TrendingUp, Users, Bot, Calendar, Award, CheckCircle, Star, ArrowRight, MessageCircle, BarChart3, Clock, Target, Zap } from 'lucide-react';

const HeaderServices = () => {
    
  return (
    <section className="relative w-full py-7 h-[80vh] md:h-[60vh] bg-blue-950 overflow-hidden flex items-center justify-center ">
        <div className='container mx-auto px-6'>
            <div className="relative container mx-auto px-6 py-20">
                <div className="flex flex-col items-center justify-center text-center py-20 gap-8">
                    <h1 className='text-4xl md:text-7xl text-white font-bold'>Our Services</h1>
                     <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                      Join our elite community of traders and unlock consistent profits with our proven strategies, automated EA, and personalized coaching programs.
                     </p>
                     <div>
                       <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl">
                         Start Trading Today <ArrowRight className="w-5 h-5 inline ml-2" />
                       </button>
                     </div>
                </div>
            </div>
        </div>
        
    </section>
    
  );
};

export default HeaderServices;