
import { CheckCircle, Calendar, MessageCircle, TrendingUp, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { FadeInNewSection, FadeInUp } from '../Animation/NewAnimation';
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Program',
      description: 'Browse our trading programs and select the one that matches your goals',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Schedule Consultation',
      description: 'Book a free 15-minute call to discuss your trading experience and goals',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Personal Assessment',
      description: 'We evaluate your experience level and recommend the best program fit',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Start Trading Journey',
      description: 'Get enrolled and begin your personalized trading education program',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];
    return ( 
        <section>
                <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeInNewSection>
        <div className="text-center mb-28">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to start your trading journey with personalized guidance
          </p>
        </div>
        </FadeInNewSection>

        {/* Steps Flow */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           
          {steps.map((step, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
           
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 z-10">
                
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-6`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} bg-opacity-10 text-gray-700 mb-6`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
            </FadeInUp>
          ))}
          
        </div>

        </div>
            </div>
        </section>
     );
}

export default HowItWorks;