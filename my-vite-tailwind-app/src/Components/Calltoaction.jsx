import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FadeInDown, FadeInRight, FadeInUp } from "../Animation/NewAnimation";

function CalltoAction() {
  const [faq, setFaq] = useState();

  return (
    <section className="relative bg-white py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeInUp>
          {/* Small label */}
          <div className="inline-block mb-8">
            <span className="text-sm text-slate-500 tracking-[0.2em] uppercase">
              Join the Community
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Ready to join now?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Trading doesn't have to be lonely or overwhelming. Connect with
            fellow Filipino traders who understand your journey, share your
            goals, and celebrate your victories. Your success story starts here.
          </p>

          {/* CTA Button - Updated link to /services#consultation */}
          <Link
            to="https://www.youtube.com/watch?v=PY8E9atq054"
            className="inline-block px-10 py-4 bg-slate-900 text-white text-base tracking-wide hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
          >
            Join our community
          </Link>

          {/* Bottom decorative line */}
        </FadeInUp>
      </div>
    </section>
  );
}

export default CalltoAction;