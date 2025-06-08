import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FadeInDown, FadeInRight, FadeInUp } from "../Animation/NewAnimation";
function CalltoAction() {

  const [faq, setFaq] = useState(

  );

  return (
    <section className="py-28 mb-8  px-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        
        <div className="text-center ">
          <FadeInRight>
          <h1 className="text-4xl md:text-7xl font-bold mb-7">Ready to join now?</h1>
          <p className="text-gray-600 ">Trading doesn't have to be lonely or overwhelming. Connect with fellow Filipino traders who understand your journey, <br /> share your goals, and celebrate your victories. Your success story starts here.</p>
           </FadeInRight>
          <Link to="/services#consultation">
          <FadeInUp>
          <button className="bg-blue-950 py-4 px-4 rounded-full mt-5 text-white font-bold hover:bg-blue-950/90">
            Join our community
          </button>
          </FadeInUp>
          </Link>

        </div>
        
      </div>
    </section>
  );
}

export default CalltoAction;
