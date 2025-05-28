import '../index.css'; // or './main.css'
import { FadeInSection } from "../Animation/FadeInSection";

function CoachSection() {
  const coaches = [
    {
      src: "/Pinoy-in-profits/hero1.png",
      alt: "Coach Lemuel",
      specialty: "Fundamental",
      specialtyColor: "blue",
      name: "Coach Lemuel",
      description:
        "Fundamental and sentiment analysis expert, bringing clarity to complex market dynamics.",
    },
    {
      src: "/Pinoy-in-profits/hero2.png",
      alt: "Coach Janeth",
      specialty: "Technical Analysis",
      specialtyColor: "green",
      name: "Coach Janeth",
      description:
        "Expert in technical analysis, known for her structured approach to identifying market trends and optimal trading zones.",
    },
    {
      src: "/Pinoy-in-profits/hero3.png",
      alt: "Coach Retchel",
      specialty: "Risk Management",
      specialtyColor: "purple",
      name: "Coach Retchel",
      description:
        "Specialist in risk management and entry timing, helping traders control losses and lock in gains.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Meet Our Expert Coaches
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn from experienced traders who have been through the ups and downs of the forex market
          </p>
        </div>
        <FadeInSection>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map(({ src, alt, specialty, specialtyColor, name, description }) => (
            <div
              key={name}
              className={`
                bg-white rounded-2xl p-8 border border-gray-200 text-center cursor-pointer flex flex-col h-full
                hover:shadow-lg hover:border-${specialtyColor}-400
                 duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                will-change-transform
                transform hover:-translate-y-2 hover:scale-105
              `}
            >
              <div className="relative mb-6 will-change-transform">
                <img
                  src={src}
                  alt={alt}
                  width={144}
                  height={144}
                  className={`
                    w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-950
                    hover:border-${specialtyColor}-500
                     duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    will-change-transform
                  `}
                />
                <div className="mt-2">
                  <span
                    className={`
                      text-xs font-medium bg-${specialtyColor}-100 text-${specialtyColor}-800 px-3 py-1 rounded-full
                      hover:bg-${specialtyColor}-200 transition-colors
                    `}
                  >
                    {specialty}
                  </span>
                </div>
              </div>
              <h3
                className={`
                  text-xl font-bold text-gray-900 mb-2
                  hover:text-${specialtyColor}-900 transition-colors
                `}
              >
                {name}
              </h3>
              <p
                className={`
                  text-gray-600 hover:text-gray-700 transition-colors
                  flex-grow
                `}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
        </FadeInSection>

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
