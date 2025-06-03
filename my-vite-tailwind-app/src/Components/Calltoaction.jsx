import { useState } from "react";

function CalltoAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-10 px-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Ahead of the Market
            </h3>
            <p className="text-gray-500 mb-8">
              Get weekly forex insights, market analysis, and proven trading
              strategies from our community of successful Filipino traders.
            </p>
            <div className="space-y-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Weekly Market Updates
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Proven Trading Strategies
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <form
              action="https://formsubmit.co/davenykel47@gmail.com"
              method="POST"
            >
              {/* Name */}
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full mb-4 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />

              {/* Email */}
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full mb-4 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />

              {/* Message */}
              <label htmlFor="message" className="sr-only">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are your trading goals? (Optional)"
                rows="4"
                className="w-full mb-6 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
              ></textarea>

              {/* Hidden Inputs for formsubmit.co */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/thank-you"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors text-sm"
              >
                Join Our Community
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction;
