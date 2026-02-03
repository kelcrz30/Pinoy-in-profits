import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFaq = (index) => {
    setCurrentQuestion(currentQuestion === index ? null : index);
  };

  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      faqs: [
        {
          question: "Is the community and course really free?",
          answer:
            "Yes! You get full access to our Skool community and the complete trading course at no cost.",
        },
        {
          question: "Why do I need to register with a partner broker?",
          answer:
            "Our partners (KVB, FP Markets, and XS.com) support our community so we can provide high-quality education for free.",
        },
        {
          question: "Which broker should I choose?",
          answer:
            "All three are excellent and we use these 3 brokers for our personal trading.",
        },
        {
          question: "Can I join if I already have an account with these brokers?",
          answer:
            "Usually, the partnership requires a new account created through our specific link. If you have an existing account, contact us to see if we can help you link it.",
        },
      ],
    },
    {
      id: "verification",
      title: "Verification & Security",
      faqs: [
        {
          question: "How do I get verified?",
          answer:
            "After signing up via our partner link, you will need to upload a Proof of Identity (like a passport or ID) and Proof of Residence (like a utility bill) to the broker's secure portal.",
        },
        {
          question: "Is my money safe with these brokers?",
          answer:
            "Yes. We only partner with regulated brokers. Your trading capital stays in your own brokerage account; we never have access to your funds.",
        },
        {
          question: "How long does the verification process take?",
          answer:
            "Broker verification usually takes 24 to 48 hours. Once the broker approves your documents, send us your Account ID, and we will grant you access to the Skool group.",
        },
        {
          question: "What happens if I don't pass the broker's KYC?",
          answer:
            "If the broker cannot verify you, they will tell you why (usually a blurry ID photo). If you cannot open an account at all, please contact us to discuss alternative ways to join.",
        },
      ],
    },
    {
      id: "deposits",
      title: "Deposits & Withdrawals",
      faqs: [
        {
          question: "Do I need to deposit a specific amount to join?",
          answer: "No. You just need to get verified with the broker.",
        },
        {
          question: "Can I cancel or withdraw my money anytime?",
          answer:
            "Absolutely. You have full control over your brokerage account. You can withdraw your funds whenever you like according to the broker's standard withdrawal policies.",
        },
      ],
    },
  ];

  // Flatten all FAQs for search
  const allFaqs = faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({ ...faq, category: category.id }))
  );

  // Filter FAQs based on search and category
  const getFilteredFaqs = () => {
    let filtered = allFaqs;

    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredFaqs = getFilteredFaqs();

  return (
    <div className="w-full bg-gray-50 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1a2847] text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Here's a quick rundown of the
            most common questions our users ask.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="relative">
            <svg
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-[#1a2847] focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[#1a2847] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Questions
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[#1a2847] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No questions found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const globalIndex = `${faq.category}-${index}`;
                const isOpen = currentQuestion === globalIndex;
                
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? "border-[#1a2847] shadow-lg" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full text-left px-7 py-6 flex justify-between items-center transition-colors duration-200 focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${globalIndex}`}
                    >
                      <span className={`font-semibold text-lg pr-8 transition-colors ${
                        isOpen ? "text-[#1a2847]" : "text-gray-800"
                      }`}>
                        {faq.question}
                      </span>
                      
                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? "bg-[#1a2847]" : "bg-gray-100"
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 transition-colors ${
                            isOpen ? "text-white" : "text-gray-600"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          id={`faq-${globalIndex}`}
                        >
                          <div className="px-7 pb-6 text-gray-600 leading-relaxed border-t-2 border-gray-100 pt-5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Contact CTA */}

      </div>
    </div>
  );
}

export default Faq;