import { TrendingUp, Clock, Shield, Star, Play } from 'lucide-react';
import { FadeInNewSection, FadeInUp } from '../Animation/NewAnimation';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Join Our Skool Community',
      description:
        'Click the Skool link found below the video description or in the pinned comment to join our official trading community.',
      icon: <Star className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Complete Quick Onboarding',
      description:
        'Answer a few onboarding questions inside Skool so we can understand your experience level and goals.',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Create Your Broker Account',
      description:
        'Sign up using our official partner broker link. This account serves as your access to trading tools.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      title: 'Learn and Execute',
      description:
        'No deposit is required at this stage. Account creation is for verification only. Trading involves risk.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section>
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <FadeInNewSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps to start your trading journey with personalized guidance
              </p>

              {/* Video CTA */}
              <a
                href="https://www.youtube.com/watch?v=PY8E9atq054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch the Intro Video
              </a>
            </div>
          </FadeInNewSection>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
            {steps.map((step, index) => (
              <FadeInUp key={index} delay={index * 0.2}>
                <div className="relative group h-full">

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0" />
                  )}

                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 z-10 h-full flex flex-col">

                    {/* Number + Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg`}
                      >
                        {step.number}
                      </div>

                      <div
                        className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} bg-opacity-10 text-gray-700`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

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
