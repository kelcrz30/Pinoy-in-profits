// Home.jsx
import Calltoaction from "../Components/Calltoaction";
import CoachSection from "../Components/coachSection";

import InfoSection from "../Components/infoSection";
import TestimonialSection from "../Components/TestimonialCard";
import WhatyouGet from "../Components/WhatyouGet";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CoachLeaderShip from "../Components/coachLeadership";

// Testimonials data
const testimonials = [
  { id: 1, name: "Bernard", role: "Engineer", rating: 5, text: "Very Knowledgeable", videoId: "81SmGYkRoaQ" },
  { id: 2, name: "Rouel", role: "Surgeon", rating: 5, text: "I Highly recommend PIP", videoId: "joyPKqExMdE" },
  { id: 3, name: "Joel", role: "Business Owner", rating: 5, text: "Alam nila yung ginagawa nila", videoId: "95-AlM5afH8" },
  { id: 4, name: "Cecile", role: "Business Owner", rating: 5, text: "They Were able to Answer all the Questions of the Students", videoId: "fMOkClMMVYA" },
  { id: 5, name: "Jericson", role: "Business Owner", rating: 5, text: "First Time ko Magkaroon ng Coach Na Active Sa Community", videoId: "MNkwvDhnAsA" },
  { id: 6, name: "Victor", role: "Student", rating: 5, text: "Napaka Organize ng mga Coaches", videoId: "LZ45_7C-YJc" },
  { id: 7, name: "Jeford", role: "Real estate agent", rating: 5, text: "Very Helpful ang mga Trainings", videoId: "d2NUkigZ92Q" },
  { id: 8, name: "Christian", role: "Student", rating: 5, text: "Napaka Knowledgeable Mapa Fundamentals man o Technical Analysis", videoId: "LXiZnXoVvIM" },
];

function Home() {
  return (
    <>
    <Hero/>
      <WhatyouGet />
      <InfoSection />
      <CoachLeaderShip/>
      <TestimonialSection testimonials={testimonials} />
      <Calltoaction />
      <Footer />
    </>
  );
}

export default Home;
