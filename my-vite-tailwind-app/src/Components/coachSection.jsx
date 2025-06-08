import '../index.css'; // or './main.css'
import { FadeInSection } from "../Animation/FadeInSection";

function CoachSection() {
  const coaches = [
    {
      src: "hero1.png",  // Just the filename here
      alt: "Coach Lemuel",
      specialty: "Fundamental and Sentiment",
      specialtyColor: "blue",
      name: "Coach Lemuel",
      description:
        "Fundamental and sentiment analysis expert, bringing clarity to complex market dynamics.",
    },
    {
      src: "hero2.png",
      alt: "Coach Janeth",
      specialty: "Technical and Sentiment",
      specialtyColor: "green",
      name: "Coach Janeth",
      description:
        "Expert in technical analysis, known for her structured approach to identifying market trends and optimal trading zones.",
    },
    {
      src: "hero3.png",
      alt: "Coach Retchel",
      specialty: "Technical and Risk Management",
      specialtyColor: "purple",
      name: "Coach Retchel",
      description:
        "Specialist in risk management and entry timing, helping traders control losses and lock in gains.",
    },
  ];

  const colorClasses = {
    blue: {
      border: "hover:border-blue-400",
      hoverText: "hover:text-blue-900",
      bg: "bg-blue-100",
      text: "text-blue-800",
      bgHover: "hover:bg-blue-200",
      imageBorder: "hover:border-blue-500",
    },
    green: {
      border: "hover:border-green-400",
      hoverText: "hover:text-green-900",
      bg: "bg-green-100",
      text: "text-green-800",
      bgHover: "hover:bg-green-200",
      imageBorder: "hover:border-green-500",
    },
    purple: {
      border: "hover:border-purple-400",
      hoverText: "hover:text-purple-900",
      bg: "bg-purple-100",
      text: "text-purple-800",
      bgHover: "hover:bg-purple-200",
      imageBorder: "hover:border-purple-500",
    },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="md:max-w-6xl lg:max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            Meet Our Expert Coaches
          </h3>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Learn from experienced traders who have been through the ups and downs of the forex market
          </p>
        </div>

        <FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map(({ src, alt, specialty, specialtyColor, name, description }, index) => {
             const classes = colorClasses[specialtyColor];
 
              return (
                <FadeInSection delay={index * 0.3} key={name} className="group">
                <div
                  key={name}
                  className={`
                    bg-white rounded-2xl p-8 border border-gray-200 text-center cursor-pointer flex flex-col h-full
                    hover:shadow-lg ${classes.border}
                    duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    will-change-transform transform hover:-translate-y-2 hover:scale-105
                  `}
                >
                  <div className="relative mb-6 will-change-transform">
                    <img
                      src={`${import.meta.env.BASE_URL}${src}`} 
                      alt={alt}
                      width={144}
                      height={144}
                      className={`
                        w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-950
                        ${classes.imageBorder} duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform
                      `}
                    />
                    <div className="mt-2">
                      <span
                        className={`
                          text-xs font-medium ${classes.bg} ${classes.text} px-3 py-1 rounded-full
                          ${classes.bgHover} transition-colors
                        `}
                      >
                        {specialty}
                      </span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${classes.hoverText} transition-colors`}>
                    {name}
                  </h3>
                  <p className="text-gray-600 hover:text-gray-700 transition-colors flex-grow">
                    {description}
                  </p>
                </div>
                 </FadeInSection>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default CoachSection;
