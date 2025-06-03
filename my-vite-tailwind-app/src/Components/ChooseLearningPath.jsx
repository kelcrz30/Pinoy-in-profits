import React, { useState } from 'react';
import { CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

function ChooseLearningPath() {
  const [selectedPlan, setSelectedPlan] = useState('intensive');

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mt-8 mb-10">
          <h1 className="mb-4 text-5xl font-bold">Our Services</h1>
          <p className="text-gray-600 text-xl">Personalize training programs for every trader</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Discord Community Card */}
          <div className="relative bg-white rounded-2xl p-6 border-2 border-blue-500 shadow-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1" /> Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">Discord Community</h2>
              <span className="text-blue-600 text-3xl font-bold">₱1,000</span>
            </div>
            <div className="space-y-3 flex-grow">
              {[
                "Weekly Live group Session",
                "Forex Modules from basic to advance",
                "Ebooks (Forex, Crypto, Finance)",
                "Market Insights",
                "Trade Set-ups From coaches and students",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://whop.com/checkout/5r9pcRmcAESjh4mlTH-zXqr-1WeZ-WHoL-HhNqrp6yYMJ1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-950 py-3 text-white rounded-xl text-center block hover:bg-blue-900 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* PIP Intensive Program */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col h-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">PIP Intensive Program</h2>
              <span className="text-blue-600 text-3xl font-bold">₱25,000</span>
            </div>
            <div className="space-y-3 flex-grow">
              {[
                "Weekly Live group Session",
                "3 Months of PIP Framework and Playbook",
                "Customizable Trading Plan to fit risk profile",
                "1 Year Exclusive Discord Access",
                "Only three participants allowed in each program",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setSelectedPlan('intensive')}
                className="w-full bg-blue-950 py-3 text-white rounded-xl hover:bg-blue-900 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* PIP VIP Program */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col h-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">PIP VIP Program</h2>
              <span className="text-blue-600 text-3xl font-bold">₱55,000</span>
            </div>
            <div className="space-y-3 flex-grow">
              {[
                "Personalized 1-on-1 Coaching",
                "3 Months of PIP Framework and Playbook",
                "Customizable Trading Plan to fit risk profile",
                "Lifetime discord access",
                "Exclusive Access to Premium Forex Modules",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setSelectedPlan('vip')}
                className="w-full bg-blue-950 py-3 text-white rounded-xl hover:bg-blue-900 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* PIP BOT */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col h-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">PIP BOT</h2>
              <span className="text-blue-600 text-3xl font-bold">FREE w/ $500 Deposit</span>
            </div>
            <div className="space-y-3 flex-grow">
              {[
                "Fully Automated - No intervention Needed",
                "Average Monthly Gain: 2%",
                "25.22% Verified Gain on Live Account via MyFxBook",
                "Intelligent Risk Management",
                "Time Savings and Stress Free",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-tight">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setSelectedPlan('bot')}
                className="w-full bg-blue-950 py-3 text-white rounded-xl hover:bg-blue-900 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
}

export default ChooseLearningPath;