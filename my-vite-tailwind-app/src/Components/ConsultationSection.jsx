import React, { useState } from 'react';
import { CheckCircle, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import Footer from './Footer';

function ConsultationSection({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    preferredTime: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    try {
    
      const emailjs = await import('@emailjs/browser');
      
       const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
       const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
       const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
       const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        program: formData.program,
        experience: formData.experience,
        preferred_time: formData.preferredTime,
        message: `New consultation request from ${formData.name}. Phone: ${formData.phone}, Program: ${formData.program}, Experience: ${formData.experience}, Preferred Time: ${formData.preferredTime}`,
      };

      console.log('Sending admin email with params:', templateParams);
      
      const adminResult = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Admin email sent successfully:', adminResult);

      const autoReplyParams = {
        to_email: formData.email,  
        user_email: formData.email, 
        to_name: formData.name,
        user_name: formData.name,
        whop_link: 'https://whop.com/checkout/8WpGq97i5XRW6IZax-MlHk-VCC8-Qbc9-N0GyJQPNmlJa/',
        program_selected: formData.program,
      };

      console.log('Sending auto-reply with params:', autoReplyParams);

      const autoReplyResult = await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
      console.log('Auto-reply sent successfully:', autoReplyResult);

      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        experience: '',
        preferredTime: '',
      });
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      
      if (error.status === 422) {
        setError('There was an issue with the email configuration. Please contact us directly at davenykel47@gmail.com');
      } else {
        setError('Failed to send message. Please try again or contact us directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
<section id="consultation" className=''>
    <div className='max-w-7xl mt-20 py-20 mx-auto sm:px-8 lg:px-8 '>
        <div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    <div className="p-12 flex flex-col justify-center">
                        <div className='mb-8'>
                            <h3 className='text-5xl font-bold text-black mb-6'>
                                Ready to Start Your Trading Journey?
                            </h3>
                            <p className='text-lg text-gray-600 mb-8'> 
                                All new members begin with a personalized consultation to ensure you get the perfect program match for your goals and experience level.
                            </p>
                            <div className='space-y-4'>
                                <div className='flex items-center text-gray-700'>
                                    <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>100% Free consultation - No obligation</span>
                                </div>
                                <div className='flex items-center text-gray-700'>
                                    <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                    <span>Personalized program recommendation</span>
                                </div>
                                <div className='flex items-center text-gray-700'>
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                    <span>Expert guidance from day one</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {!isSubmitted ? (
                        <div id="consultation-form" className="bg-blue-950 p-12">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-6">Book Your Free Call</h4>
                                </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                                />
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                            />

                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                            >
                                <option value="" className="text-gray-900">Select Program Interest</option>
                                <option value="discord-community" className="text-gray-900">Discord Community (₱1,000)</option>
                                <option value="pip-intensive" className="text-gray-900">PIP Intensive Program (₱25,000)</option>
                                <option value="pip-vip" className="text-gray-900">PIP VIP Program (₱55,000)</option>
                                <option value="pip-bot" className="text-gray-900">PIP BOT (FREE w/ ₱500 Deposit)</option>
                            </select>

                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                            >
                                <option value="" className="text-gray-900">Trading Experience Level</option>
                                <option value="beginner" className="text-gray-900">Complete Beginner</option>
                                <option value="some-experience" className="text-gray-900">Some Experience</option>
                                <option value="intermediate" className="text-gray-900">Intermediate</option>
                                <option value="advanced" className="text-gray-900">Advanced</option>
                            </select>

                            <select
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                            >
                                <option value="" className="text-gray-900">Preferred Call Time</option>
                                <option value="morning" className="text-gray-900">Morning (9AM - 12PM)</option>
                                <option value="afternoon" className="text-gray-900">Afternoon (1PM - 5PM)</option>
                                <option value="evening" className="text-gray-900">Evening (6PM - 9PM)</option>
                            </select>

                                {error && (
                                    <div className="col-span-1 sm:col-span-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-4">
                                        {error}
                                    </div>
                                )}
                                
                                <div className="col-span-1 sm:col-span-2">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 px-8 rounded-lg  transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Schedule My Free Consultation
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-sm text-gray-400 text-center mt-3">
                                        We'll contact you within 24 hours to schedule your call
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="consultation-form" className="py-12 px-12 bg-blue-950 flex flex-col text-center items-center justify-center">
                           <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                           <h4 className="text-2xl font-bold text-white mb-4">Thank You!</h4>
                            <p className="text-gray-300 mb-6">
                           We've received your consultation request. Our team will contact you within 24 hours to schedule your free call.
                           </p>
                            <p className="text-sm text-gray-400">
                           Check your email for confirmation details.
                           </p>
                            <button
                             onClick={() => setIsSubmitted(false)}
                             className="mt-4 text-blue-400 hover:text-blue-300 underline"
                           >
                             Submit Another Request
                           </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</section>
  );
}

export default ConsultationSection;