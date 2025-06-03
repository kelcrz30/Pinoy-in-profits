import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./form/thankyou";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Pages/Services";
import Contact from './Pages/Contact';

function App() {
  return (
    <Router basename="/Pinoy-in-profits">
      <ScrollToTop/>
      <Navbar />
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
