import ChooseLearningPath from "../Components/ChooseLearningPath";
import ConsultationSection from "../Components/ConsultationSection";
import HeaderServices from "../Components/HeaderServices";
import HowItWorks from "../Components/HowItWorks";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#consultation') {

      const formEl = document.getElementById('consultation-form');
      if (formEl) {
        formEl.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'  
        });
      } else {
        const sectionEl = document.getElementById('consultation');
        if (sectionEl) {
          sectionEl.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    }
  }, [location]);

  return ( 
    <>
      <HeaderServices/>
      <ChooseLearningPath/>
      <HowItWorks/>
      <ConsultationSection />
    </>
  );
}

export default Services;