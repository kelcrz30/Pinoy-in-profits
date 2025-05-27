import { Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { FadeInSection } from "../Animation/FadeInSection";

function WhatyouGet() {
  return ( 
    <section className='pt-24 pb-16 px-6 bg-gray-50'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
              What You'll Get with
              <br />
              <span className="text-blue-950/95">
                Pinoys in Profit
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Being a part of Pinoys in Profit means gaining more than just forex knowledge. It's about having the emotional 
              and strategic support of a community that understands your struggles, while giving you the tools to succeed.
            </p>
          </FadeInSection>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {[{
            icon: <Users className="text-blue-950" size={32} />,
            title: "Personalized Coaching",
            desc: "Get tailored advice and guidance from experienced traders"
          },{
            icon: <TrendingUp className="text-blue-950" size={32} />,
            title: "Emotional Support",
            desc: "Overcome the highs and lows of trading with the help of like-minded traders"
          },{
            icon: <Award className="text-blue-950" size={32} />,
            title: "Live Events & Bootcamps",
            desc: "Learn through interactive workshops, webinars, and live discussions"
          }].map(({icon, title, desc}, i) => (
            <FadeInSection key={title} delay={i * 0.2}>
              <div className='bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow group flex flex-col h-full'>
                <div className='bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors'>
                  {icon}
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{title}</h3>
                <p className='text-gray-600 mb-6 leading-relaxed flex-grow'>{desc}</p>
                <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors flex items-center mt-auto cursor-pointer">
                  Discover the Benefits <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatyouGet;
