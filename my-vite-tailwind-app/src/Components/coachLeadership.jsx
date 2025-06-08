import { Link } from "react-router-dom";
import { FadeInSection } from "../Animation/FadeInSection";
import { motion } from "framer-motion";
function CoachLeaderShip() {
    return ( 
            <section id="leadership" className="py-20 bg-blue-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Experienced traders and educators dedicated to your success</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Janeth Aclera",
                                role: "Founder & Coach",
                                experience: "5+ Years Trading",
                                specialty: "Risk Management Expert",
                                image: `${import.meta.env.BASE_URL}hero2.png`
                            },
                            {
                                name: "Lemuel Buenviaje",
                                role: "Founder & Coach",
                                experience: "5+ Years Trading",
                                specialty: "Fundamentals",
                               image: `${import.meta.env.BASE_URL}hero1.png`
                            },
                            {
                                name: "Retchel Pacamara",
                                role: "Founder & Coach",
                                experience: "6+ Years Trading",
                                specialty: "Technical Analyst ",
                                image: `${import.meta.env.BASE_URL}hero3.png`
                            }
                        ].map((member, index) => (
                            
                            <FadeInSection delay={index * 0.3} key={index} className="group">
                                
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative h-64 flex items-center justify-center bg-gray-50">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                            <p className="text-blue-600 font-medium text-sm mb-1">{member.role}</p>
                                            <p className="text-gray-500 text-sm">{member.experience} • {member.specialty}</p>
                                        </div>
                                    </div>
                                </div>
                        
                            </FadeInSection>
                        ))}
                    </div>

                     <div className="text-center mt-20">
                         <Link 
                             to="/about" 
                             className="inline-flex items-center gap-2 font-bold text-lg rounded-full text-black px-8 py-4 bg-white hover:-translate-y-1 transition-all duration-300"
                         >
                             Meet the Team
                             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                             </svg>
                         </Link>
                     </div>

                </div>
            </section>
     );
}

export default CoachLeaderShip;