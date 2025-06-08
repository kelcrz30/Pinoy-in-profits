import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInLeft } from "../Animation/NewAnimation";

function Faq() {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const toggleFaq = (index) => {
        setCurrentQuestion(currentQuestion === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Pinoys in Profit?",
            answer: "Pinoys in Profit is a forex trading community dedicated to helping Filipinos achieve success in the financial markets.",
        },
        {
            question: "What services do you offer?",
            answer: "We offer a supportive Discord community, comprehensive forex learning modules, a VIP program, and much more.",
        },
        {
            question: "What is PIPBOT?",
            answer: "PIPBOT is a fully automated trading robot designed to trade the forex market with efficiency, consistency, and strong risk management."
        },
        {
            question: "How can I avail of PIPBOT?",
            answer: "To avail of PIPBOT, simply book a call with us. Our team will get in touch with you as soon as possible to guide you through the next steps."
        },
    ];

    return (
        <div className="py-4 lg:py-20">
            <div className="px-5 max-w-7xl lg:mt-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="py-10">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">FAQ</h4>
                        <div className="flex text-blue-950 flex-col text-6xl md:text-7xl xl:text-8xl font-bold leading-tight">
                            <FadeInLeft delay={0.1}>
                            <span>Frequently</span>
                            </FadeInLeft>
                             <FadeInLeft delay={0.2}>
                            <span>asked</span>
                            </FadeInLeft>
                            <FadeInLeft delay={0.3}>
                            <span>questions.</span>
                            </FadeInLeft>
                        </div>
                    </div>

                    <div>
                        <div className="mb-12">
                            <h3 className="font-semibold text-2xl mb-3">Have questions? We've got answers.</h3>
                            <p className="text-gray-600">
                                We know you might be curious about how PIPBOT works, what services we offer, and how you can start your journey with Pinoys in Profit. Here's a quick rundown of the most common questions our users ask.
                            </p>
                        </div>

                        <dl className="space-y-1">
                            {faqs.map((faq, index) => (
                                <div key={index} className="group">
                                    <dt>
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left py-6 flex justify-between items-center  transition-colors duration-200 focus:outline-none "
                                            aria-expanded={currentQuestion === index}
                                            aria-controls={`faq-${index}`}
                                        >
                                            <span className="text-lg font-medium text-gray-900 pr-8">
                                                {faq.question}
                                            </span>
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    rotate: currentQuestion === index ? 45 : 0
                                                }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-gray-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </motion.div>
                                        </button>
                                    </dt>

                                    <AnimatePresence initial={false}>
                                        {currentQuestion === index && (
                                            <motion.dd
                                                id={`faq-${index}`}
                                                key="content"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 pr-12">
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.dd>
                                        )}
                                    </AnimatePresence>
                                    
                                    {index < faqs.length - 1 && (
                                        <div className="border-b border-gray-200"></div>
                                    )}
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;