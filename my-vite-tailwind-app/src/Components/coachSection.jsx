function CoachSection() {
    return (
        <section className="py-20 px-6 bg-blue-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-white mb-4">Meet Our Expert Coaches</h3>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">Learn from experienced traders who have been through the ups and downs of the forex market</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                        <div className="relative mb-6">
                            <img src="./hero1.JPG" alt="Coach Lemuel"
                                className="w-35 h-35 rounded-full mx-auto object-cover border-4 border-blue-950 group-hover:border-blue-600 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="mt-2">
                                <span className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full group-hover:bg-blue-200 transition-colors">
                                    Fundamental
                                </span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Coach Lemuel</h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Fundamental and sentiment analysis expert, bringing clarity to complex market dynamics.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-green-300 transition-all duration-300 group cursor-pointer">
                        <div className="relative mb-6">
                            <img src="./hero2.JPG" alt="Coach Janeth"
                                className="w-35 h-35 rounded-full mx-auto object-cover border-4 border-blue-950 group-hover:border-green-600 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="mt-2">
                                <span className="text-xs font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full group-hover:bg-green-200 transition-colors">
                                    Technical Analysis
                                </span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-900 transition-colors">Coach Janeth</h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Expert in technical analysis, known for her structured approach to identifying market trends and optimal trading zones.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300 group cursor-pointer">
                        <div className="relative mb-6">
                            <img src="./hero3.JPG" alt="Coach Retchel"
                                className="w-35 h-35 rounded-full mx-auto object-cover border-4 border-blue-950 group-hover:border-purple-600 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="mt-2">
                                <span className="text-xs font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full group-hover:bg-purple-200 transition-colors">
                                    Risk Management
                                </span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-900 transition-colors">Coach Retchel</h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Specialist in risk management and entry timing, helping traders control losses and lock in gains.</p>
                    </div>
                </div>
                <div className="text-center py-5 mt-15">
                    <button className="font-bold text-1xl text-blue-950 cursor-pointer px-10 bg-white hover:bg-white/90 p-3 rounded-2xl shadow-lg">
                    Be part of our community
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CoachSection;