import { ArrowRight, CheckCircle, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { useState,useEffect } from "react";


function ContactPage() {
 const [formData, setFormData] = useState({ 
    name: "",
    email: "",
    number: "",
    interested: "",
    text: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError('');

    if (!formData.name || !formData.email || !formData.number || !formData.interested || !formData.text) {
      setIsError("Please fill up this form");
      setIsLoading(false);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Check if environment variables are loaded
      console.log('Environment check:', {
        serviceId: serviceId ? 'Found' : 'Missing',
        templateId: templateId ? 'Found' : 'Missing',
        autoReplyTemplateId: autoReplyTemplateId ? 'Found' : 'Missing',
        publicKey: publicKey ? 'Found' : 'Missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.number,
        interested: formData.interested,
        message: formData.text,
        preferred_time: formData.preferredTime || '',
      };

      console.log('Sending admin email with params:', templateParams);
      const adminResult = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Admin email sent successfully:', adminResult);

      const autoReplyParams = {
        to_email: formData.email,
        user_email: formData.email,
        to_name: formData.name,
        user_name: formData.name,
      };

      console.log('Sending auto-reply with params:', autoReplyParams);
      const autoReplyResult = await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
      console.log('Auto-reply sent successfully:', autoReplyResult);

      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        number: '',
        interested: '',
        text: ''
      });
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);

            if(error.status === 422) {
                setIsError('There was an issue with the email configuration. Please contact us directly at davenykel47@gmail.com');
            }else {
                setIsError('Failed to send message. Please try again or contact us directly.');
            }   
        }finally {
            setIsLoading(false)
        }
    }

    return ( 
    <section className="w-full py-10 min-h-[60vh] bg-blue-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-12">
      <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl">
        Get In Touch
      </h1>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-12">
      {/* Left Side (Form) */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-white ">Send us a message</h3>
          <p className="text-white/85 text-sm md:text-base">
            Feel free to reach out to us for any inquiries or assistance you need. We’re here to help you!
          </p>

          {!isSubmitted ? (
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              {/* Input fields */}
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b-4 p-3 text-white border-white outline-none bg-blue-950"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b-4 p-3 text-white border-white outline-none bg-blue-950"
              />
              <input
                name="number"
                type="tel"
                placeholder="Enter number"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full border-b-4 p-3 text-white border-white outline-none bg-blue-950"
                required
              />
              <select
                name="interested"
                value={formData.interested}
                onChange={handleInputChange}
                className=" w-full border-b-4 p-3 text-white border-white outline-none bg-blue-950"
              >
                <option value="">What do you need help with?</option>
                <option value="need-guidance">I’m Not Sure What to Choose / Need Help Deciding</option>
                <option value="request-consultation">I Want to Book a Consultation</option>
                <option value="cannot-access">Cannot Access Product or Service</option>
                <option value="no-confirmation">No Email or Confirmation Received</option>
                <option value="need-support">Need Help with Setup or Use</option>
                <option value="other">Other Issue</option>
              </select>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="What's your concern?"
                rows="4"
                className="bg-blue-950 col-span-1 sm:col-span-2 border-b-4 p-3 border-white text-white outline-none resize-none"
              ></textarea>

              {/* Error Message */}
              {isError && (
                <div className="col-span-1 sm:col-span-2 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg">
                  {isError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="col-span-1 sm:col-span-2 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Schedule My Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="col-span-1 sm:col-span-2 text-sm text-gray-400 text-center mt-2">
                We'll contact you within 24 hours to schedule your call
              </p>
            </form>
          ) : (
            <div className="py-12 px-8 bg-white rounded-lg text-center text-white space-y-4">
              <CheckCircle className="w-12 h-12 mx-auto text-green-400" />
              <h4 className="text-xl font-bold text-black">Thank You!</h4>
              <p className="text-black">We've received your request. Our team will contact you soon.</p>
              <p className="text-sm text-gray-500">
                Check your email for confirmation.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-300"></div>

      {/* Right Side (Contact Info) */}
      <div className="md:w-1/2 space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
          <p className="text-sm text-gray-600">
            Need assistance right away? Give us a call!
          </p>
          <p className="text-orange-600 font-semibold mt-1">0917-570-3635</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
          <p className="text-sm text-gray-600">
            Come see us at our office in Bonifacio Global City!
          </p>
          <a
            href="https://maps.app.goo.gl/fzYspSjVkvLjJEdQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-semibold mt-1 inline-block hover:underline"
          >
            📍 17th Floor, High Street South Corporate Plaza Tower 2, BGC, Taguig, Metro Manila
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Social</h3>
          <p className="text-sm text-gray-600">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=100067103928166" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" className="text-red-600 hover:text-red-800">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@pinoys_in_profit?is_from_webapp=1&sender_device=pc" target="_blank" className="text-black hover:text-gray-800">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     );
}

export default ContactPage;